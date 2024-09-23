import * as React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import COLORS from '@/constants/COLORS';
import isNumber from 'lodash/isNumber';
import { PlacePicks } from '@/api/pl-pick-category/findUserCategories';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useAppDispatch } from '@/hooks/redux-hooks';

interface CategoryCheckIndicatorProps {
  pl_pick_category_id: number;
  placePicks: PlacePicks[];
}

export default function CategoryCheckIndicator({
  placePicks,
  pl_pick_category_id,
}: CategoryCheckIndicatorProps) {
  const {
    placeId,
    selectedCategoryId,
    addPPDrawerState,
    setMemoHandler,
    setAliasHandler,
    setLinkHandler,
    setSelectedCategoryIdHandler,
  } = useAddPPDrawer();

  const dispatch = useAppDispatch();

  useDeepCompareEffect(() => {
    if (addPPDrawerState && isNumber(placeId)) {
      const matchingPlacePick = placePicks.find(
        (pick) => pick.place_id === placeId
      );
      if (matchingPlacePick) {
        const { memo, link, alias } = matchingPlacePick;
        setSelectedCategoryIdHandler(pl_pick_category_id);
        setMemoHandler(memo);
        setAliasHandler(alias);
        setLinkHandler(link);
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
