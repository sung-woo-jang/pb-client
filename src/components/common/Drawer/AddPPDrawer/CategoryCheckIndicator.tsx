import * as React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import COLORS from '@/constants/COLORS';
import isNumber from 'lodash/isNumber';
import { PlacePicks } from '@/api/pl-pick-category/findUserCategories';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {
  setAlias,
  setLink,
  setMemo,
  setSelectedCategoryId,
} from '@/store/slice/drawer/addPPDrawer/slice';
import { useAppDispatch } from '@/hooks/redux-hooks';

interface CategoryCheckIndicatorProps {
  pl_pick_category_id: number;
  placePicks: PlacePicks[];
}

export default function CategoryCheckIndicator({
  placePicks,
  pl_pick_category_id,
}: CategoryCheckIndicatorProps) {
  const { placeId, selectedCategoryId, addPPDrawerState } = useAddPPDrawer();

  const dispatch = useAppDispatch();

  useDeepCompareEffect(() => {
    if (addPPDrawerState && isNumber(placeId)) {
      const matchingPlacePick = placePicks.find(
        (pick) => pick.place_id === placeId
      );
      if (matchingPlacePick) {
        dispatch(setSelectedCategoryId(pl_pick_category_id));
        dispatch(setMemo(matchingPlacePick.memo));
        dispatch(setAlias(matchingPlacePick.alias));
        dispatch(setLink(matchingPlacePick.link));
      }
    }
  }, [placePicks, addPPDrawerState, placeId, pl_pick_category_id, dispatch]);

  const circleColor =
    selectedCategoryId === pl_pick_category_id
      ? COLORS.CHECK_CIRCLE.UN_SELECTED
      : COLORS.CHECK_CIRCLE.SELECTED;

  return (
    <button>
      <FaRegCheckCircle
        style={{
          color: circleColor,
          fontSize: 28,
        }}
      />
    </button>
  );
}
