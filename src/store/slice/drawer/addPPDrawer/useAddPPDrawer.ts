import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setAddPPDrawerState,
  setAlias,
  setLink,
  setMemo,
  setPlaceId,
  setPlaceTitle,
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
  const dispatch = useAppDispatch();

  const addPPDrawerOpenHandler = () => {
    dispatch(setAddPPDrawerState(true));
  };
  const addPPDrawerCloseHandler = () => {
    dispatch(setAddPPDrawerState(false));
  };

  const setAddPPDrawerHandler = (state: boolean) => {
    dispatch(setAddPPDrawerState(state));
  };

  const addPPDrawerToggleHandler = () => {
    dispatch(toggleAddPPDrawerState());
  };

  const setPlaceTitleHandler = (title: string) => {
    dispatch(setPlaceTitle(title));
  };

  const setAliasHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAlias(value));
  };
  const setMemoHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMemo(value));
  };
  const setLinkHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLink(value));
  };
  const setPlaceIdHandler = (placeId: number | boolean) => {
    dispatch(setPlaceId(placeId));
  };

  return {
    addPPDrawerState,
    placeTitle,
    alias,
    link,
    memo,
    placeId,
    addPPDrawerOpenHandler,
    setAddPPDrawerHandler,
    addPPDrawerToggleHandler,
    addPPDrawerCloseHandler,
    setPlaceTitleHandler,
    setLinkHandler,
    setAliasHandler,
    setMemoHandler,
    setPlaceIdHandler,
  };
}
