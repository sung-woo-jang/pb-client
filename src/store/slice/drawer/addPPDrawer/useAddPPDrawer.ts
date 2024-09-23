import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  addSelectedCategoryId,
  resetAddPPDrawerState,
  setAddPPDrawerState,
  setAlias,
  setLink,
  setMemo,
  setPlaceId,
  setPlaceTitle,
  toggleAddPPDrawerState,
  toggleSelectedCategoryId,
} from '@/store/slice/drawer/addPPDrawer/slice';

export default function useAddPPDrawer() {
  const addPPDrawerState = useAppSelector(
    (state) => state.addPPDrawer.addPPDrawerState
  );

  const placeTitle = useAppSelector((state) => state.addPPDrawer.placeTitle);
  const alias = useAppSelector((state) => state.addPPDrawer.alias);
  const link = useAppSelector((state) => state.addPPDrawer.link);
  const memo = useAppSelector((state) => state.addPPDrawer.memo);
  const placeId = useAppSelector((state) => state.addPPDrawer.placeId);

  const selectedCategoryIds = useAppSelector(
    (state) => state.addPPDrawer.selectedCategoryIds
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!addPPDrawerState) {
      dispatch(resetAddPPDrawerState());
    }
  }, [dispatch, addPPDrawerState]);

  const setAddPPDrawerHandler = (state: boolean) => {
    dispatch(setAddPPDrawerState(state));
  };

  const addPPDrawerToggleHandler = () => {
    dispatch(toggleAddPPDrawerState());
  };

  const setPlaceTitleHandler = (title: string) => {
    dispatch(setPlaceTitle(title));
  };

  const setAliasHandler = (value: string) => {
    dispatch(setAlias(value));
  };
  const setMemoHandler = (value: string) => {
    dispatch(setMemo(value));
  };
  const setLinkHandler = (value: string) => {
    dispatch(setLink(value));
  };
  const setPlaceIdHandler = (placeId: number | boolean) => {
    dispatch(setPlaceId(placeId));
  };

  const toggleSelectedCategoryIdHandler = (categoryId: number) => {
    dispatch(toggleSelectedCategoryId(categoryId));
  };

  const addSelectedCategoryIdHandler = (categoryId: number) => {
    dispatch(addSelectedCategoryId(categoryId));
  };

  return {
    addPPDrawerState,
    selectedCategoryIds,
    placeTitle,
    alias,
    link,
    memo,
    placeId,
    setAddPPDrawerHandler,
    addPPDrawerToggleHandler,
    setPlaceTitleHandler,
    setLinkHandler,
    setAliasHandler,
    setMemoHandler,
    setPlaceIdHandler,
    toggleSelectedCategoryIdHandler,
    addSelectedCategoryIdHandler,
  };
}
