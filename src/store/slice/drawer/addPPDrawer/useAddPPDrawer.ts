import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  resetAddPPDrawerState,
  setAddPPDrawerState,
  setAlias,
  setLink,
  setMemo,
  setPlaceId,
  setPlaceTitle,
  setSelectedCategoryId,
  toggleAddPPDrawerState,
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

  const selectedCategoryId = useAppSelector(
    (state) => state.addPPDrawer.selectedCategoryId
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
  const setSelectedCategoryIdHandler = (categoryId: number) => {
    dispatch(setSelectedCategoryId(categoryId));
  };

  return {
    addPPDrawerState,
    selectedCategoryId,
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
    setSelectedCategoryIdHandler,
  };
}
