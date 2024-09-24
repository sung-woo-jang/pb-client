import React from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import { IFindUserCategoriesResponseData } from '@/api/pl-pick-category/findUserCategories';
import useCreatePlacePick from '@/api/place-pick/createPlacePick';
import isNumber from 'lodash/isNumber';
import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import AddPPForm from '@/components/common/Drawer/AddPPDrawer/AddPPForm';
import ScrollableContainer from '@/components/common/ScrollableContainer';
import CategoryList from '@/components/common/Drawer/AddPPDrawer/CategoryList';
import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';
import CategoryCheckIndicator from '@/components/common/Drawer/AddPPDrawer/CategoryCheckIndicator';
import { CommonResponse } from '@/types/apiTypes';
import isNil from 'lodash/isNil';
import useDeletePlacePick from '@/api/place-pick/deletePlacePick';

export default function AddPPDrawer() {
  const {
    alias,
    link,
    memo,
    placeId: place_id,
    placeTitle,
    selectedCategoryIds,
    addPPDrawerToggleHandler,
    addPPDrawerState,
    setAddPPDrawerHandler,
  } = useAddPPDrawer();

  const queryClient = useQueryClient();
  const categories = queryClient.getQueryData<
    CommonResponse<IFindUserCategoriesResponseData[]>
  >(
    generateQueryKeysFromUrl(API_URL.PL_PICK_CATEGORY.FIND_USER_CATEGORIES)
  )?.data;

  const { mutateAsync } = useCreatePlacePick();
  const { mutateAsync: deletePlacePickMutateAsync } = useDeletePlacePick();

  const createPlacePickMutateHandler = async () => {
    if (isNumber(place_id)) {
      if (selectedCategoryIds.length > 0) {
        const requestBody = {
          alias,
          link,
          memo,
          place_id,
          pl_pick_category_ids: selectedCategoryIds,
        };

        await mutateAsync(requestBody, {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: generateQueryKeysFromUrl(
                API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK
              ),
            });
            queryClient.invalidateQueries({
              queryKey: generateQueryKeysFromUrl(
                API_URL.PL_PICK_CATEGORY.FIND_USER_CATEGORIES
              ),
            });
          },
        });
      } else if (selectedCategoryIds.length === 0) {
        await deletePlacePickMutateAsync(
          { place_id },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: generateQueryKeysFromUrl(
                  API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK
                ),
              });
              queryClient.invalidateQueries({
                queryKey: generateQueryKeysFromUrl(
                  API_URL.PL_PICK_CATEGORY.FIND_USER_CATEGORIES
                ),
              });
            },
          }
        );
      }
    }
  };

  if (!isNil(categories)) {
    return (
      <SwipeableDrawerWrapper
        title={placeTitle}
        toggleHandler={addPPDrawerToggleHandler}
        drawerState={addPPDrawerState}
        setHandler={setAddPPDrawerHandler}
        showActionButton={true}
        onCompleteClick={createPlacePickMutateHandler}
      >
        <ScrollableContainer>
          <div className={classes.wrapper}>
            <div>
              <div className="pt-0 space-y-4">
                <AddPPForm />
                {categories.map(({ id, title, picker_color, placePicks }) => (
                  <CategoryList
                    key={id}
                    title={title}
                    color={picker_color}
                    id={id}
                  >
                    <CategoryCheckIndicator
                      pl_pick_category_id={id}
                      placePicks={placePicks}
                    />
                  </CategoryList>
                ))}
                <AddCategoryButton />
              </div>
            </div>
          </div>
        </ScrollableContainer>
      </SwipeableDrawerWrapper>
    );
  }
}
