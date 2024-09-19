import React from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import useFindUserCategories from '@/api/pl-pick-category/findUserCategories';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import useCreatePlacePick from '@/api/place-pick/createPlacePick';
import isNumber from 'lodash/isNumber';
import gt from 'lodash/gt';
import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import AddPPForm from '@/components/common/Drawer/AddPPDrawer/AddPPForm';
import ScrollableContainer from '@/components/common/ScrollableContainer';
import CategoryList from '@/components/common/Drawer/AddPPDrawer/CategoryList';
import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';
import CategoryCheckIndicator from '@/components/common/Drawer/AddPPDrawer/CategoryCheckIndicator';

export default function AddPPDrawer() {
  const {
    alias,
    link,
    memo,
    placeId: place_id,
    placeTitle,
    selectedCategoryId,
    addPPDrawerToggleHandler,
    addPPDrawerState,
    setAddPPDrawerHandler,
  } = useAddPPDrawer();

  const queryClient = useQueryClient();
  const { data: categories, isLoading, isSuccess } = useFindUserCategories();

  const { mutateAsync } = useCreatePlacePick();

  const createPlacePickMutateHandler = async () => {
    if (isNumber(place_id) && gt(selectedCategoryId, 0))
      await mutateAsync(
        {
          alias,
          link,
          memo,
          place_id,
          pl_pick_category_id: selectedCategoryId,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: generateQueryKeysFromUrl(
                API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK
              ),
            });
          },
        }
      );
  };

  if (isLoading) {
    return <LoadingSpinner size={60} />;
  } else if (isSuccess) {
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
