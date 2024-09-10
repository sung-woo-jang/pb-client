import React, { useState } from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import useFindUserCategories from '@/api/pl-pick-category/findUserCategories';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import useCreatePlacePick from '@/api/place-pick/createPlacePick';
import isNumber from 'lodash/isNumber';
import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import AddPPForm from '@/components/common/Drawer/AddPPDrawer/AddPPForm';
import CategorySection from '@/components/common/Drawer/AddPPDrawer/CategorySection';

export default function AddPPDrawer() {
  const {
    alias,
    link,
    memo,
    placeId: place_id,
    placeTitle,
    addPPDrawerToggleHandler,
    addPPDrawerState,
    setAddPPDrawerHandler,
  } = useAddPPDrawer();

  const queryClient = useQueryClient();
  const { data: categories, isLoading, isSuccess } = useFindUserCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | false>(
    false
  );
  const selectedCategoryIdChangeHandler = (id: number) => {
    setSelectedCategoryId(selectedCategoryId === id ? false : id);
  };
  const { mutateAsync } = useCreatePlacePick();

  const createPlacePickMutateHandler = async () => {
    if (isNumber(place_id) && isNumber(selectedCategoryId))
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
        title={`${placeTitle} placeId: ${place_id}`}
        toggleHandler={addPPDrawerToggleHandler}
        drawerState={addPPDrawerState}
        setHandler={setAddPPDrawerHandler}
        buttonRender={true}
        onCompleteClick={createPlacePickMutateHandler}
      >
        <div className={classes.wrapper}>
          <div>
            <div className="pt-0 space-y-4">
              <AddPPForm />
              <CategorySection
                selectedCategoryId={selectedCategoryId}
                onCategorySelect={selectedCategoryIdChangeHandler}
                categories={categories}
              />
            </div>
          </div>
        </div>
      </SwipeableDrawerWrapper>
    );
  }
}
