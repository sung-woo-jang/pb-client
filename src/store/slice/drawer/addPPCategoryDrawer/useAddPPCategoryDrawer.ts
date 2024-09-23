import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setAddPPCategoryLink,
  setAddPPCategoryMemo,
  setAddPPCategoryName,
  setAddPPCategoryPickerColor,
  setAddPPCategoryState,
  toggleAddPPCategoryDrawerState,
} from '@/store/slice/drawer/addPPCategoryDrawer/slice';
import React from 'react';
import { CircleColors } from '@/constants/COLORS';

export default function useAddPPCategoryDrawer() {
  const addPPCategoryDrawerState = useAppSelector(
    (state) => state.addPPCategoryDrawer.addPPCategoryDrawerState
  );

  const categoryName = useAppSelector(
    (state) => state.addPPCategoryDrawer.addPPCategoryCategoryName
  );

  const memo = useAppSelector(
    (state) => state.addPPCategoryDrawer.addPPCategoryMemo
  );

  const link = useAppSelector(
    (state) => state.addPPCategoryDrawer.addPPCategoryLink
  );
  const picker_color = useAppSelector(
    (state) => state.addPPCategoryDrawer.addPPCategoryPickerColor
  );
  const dispatch = useAppDispatch();

  const ppCategoryDrawerOpenHandler = () => {
    dispatch(setAddPPCategoryState(true));
  };
  const setPPCategoryDrawerHandler = (state: boolean) => {
    dispatch(setAddPPCategoryState(state));
  };

  const ppCategoryDrawerToggleHandler = () => {
    dispatch(toggleAddPPCategoryDrawerState());
  };

  const categoryNameChangeHander = (
    state: string | React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setAddPPCategoryName(`${state}`));
  };
  const memoChangeHander = (
    state: string | React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setAddPPCategoryMemo(`${state}`));
  };
  const linkChangeHander = (
    state: string | React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setAddPPCategoryLink(`${state}`));
  };

  const pickerColorChangeHander = (state: CircleColors) => {
    dispatch(setAddPPCategoryPickerColor(state));
  };

  return {
    addPPCategoryDrawerState,
    categoryName,
    memo,
    link,
    picker_color,
    pickerColorChangeHander,
    ppCategoryDrawerOpenHandler,
    setPPCategoryDrawerHandler,
    ppCategoryDrawerToggleHandler,
    categoryNameChangeHander,
    memoChangeHander,
    linkChangeHander,
  };
}
