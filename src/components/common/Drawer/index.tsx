'use client';
import { useCallback, useEffect, useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import CommentDrawer from '@/components/common/Drawer/CommentDrawer';
import AddPPCategory from '@/components/common/Drawer/AddPPCategory';
import AddPPDrawer from '@/components/common/Drawer/AddPPDrawer';
import EditPPCategory from '@/components/common/Drawer/EditPPCategory';
import PPCategoryDetailList from '@/components/common/Drawer/PPCategoryDetailList';
import PPCategoryList from '@/components/common/Drawer/PPCategoryList';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setAddPPCategoryState } from '@/store/slice/drawer/addPPCategoryDrawer/slice';
import {
  resetAddPPDrawerState,
  setAddPPDrawerState,
} from '@/store/slice/drawer/addPPDrawer/slice';
import {
  resetCommentDrawerState,
  setCommentDrawerState,
} from '@/store/slice/drawer/commentDrawer/slice';
import {
  resetEditPPCategoryDrawer,
  setEditPPCategoryDrawerState,
} from '@/store/slice/drawer/editPPCategoryDrawer/slice';
import {
  resetPPCategoryDetailListDrawer,
  setPPCategoryDetailListDrawerState,
} from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/slice';
import { setPPCategoryDrawerState } from '@/store/slice/drawer/ppCategoryList/slice';
import { RootState } from '@/store';
import PlaceInfo from '@/components/common/Drawer/PlaceInfo';
import {
  resetPlacePickInfoState,
  setPlaceInfoDrawerState,
} from '@/store/slice/drawer/placeInfoDrawer/slice';

interface DrawerStates {
  addPPCategoryDrawerState: boolean;
  addPPDrawerState: boolean;
  commentDrawerState: boolean;
  editPPCategoryDrawerState: boolean;
  ppCategoryDetailListDrawerState: boolean;
  ppCategoryListDrawerState: boolean;
  placeInfoDrawerState: boolean;
}

const selectDrawerStates = createSelector(
  (state: RootState) => state.addPPCategoryDrawer.addPPCategoryDrawerState,
  (state: RootState) => state.addPPDrawer.addPPDrawerState,
  (state: RootState) => state.commentDrawer.commentDrawerState,
  (state: RootState) => state.editPPCategoryDrawer.editPPCategoryDrawerState,
  (state: RootState) =>
    state.ppCategoryDetailListDrawer.ppCategoryDetailListDrawerState,
  (state: RootState) => state.ppCategoryListDrawer.ppCategoryListDrawerState,
  (state: RootState) => state.placeInfo.placeInfoDrawerState,
  (
    addPPCategoryDrawerState: boolean,
    addPPDrawerState: boolean,
    commentDrawerState: boolean,
    editPPCategoryDrawerState: boolean,
    ppCategoryDetailListDrawerState: boolean,
    ppCategoryListDrawerState: boolean,
    placeInfoDrawerState: boolean
  ): DrawerStates => ({
    addPPCategoryDrawerState,
    addPPDrawerState,
    commentDrawerState,
    editPPCategoryDrawerState,
    ppCategoryDetailListDrawerState,
    ppCategoryListDrawerState,
    placeInfoDrawerState,
  })
);

export default function Drawer() {
  const dispatch = useAppDispatch();
  const drawerStates = useAppSelector(selectDrawerStates);

  const closeOtherDrawers = useCallback(
    (openDrawerName: string) => {
      Object.entries(drawerStates).forEach(([drawerName, isOpen]) => {
        if (drawerName !== openDrawerName && isOpen) {
          if (drawerName === 'addPPCategoryDrawerState') {
            dispatch(setAddPPCategoryState(false));
          } else if (drawerName === 'addPPDrawerState') {
            dispatch(setAddPPDrawerState(false));
            dispatch(resetAddPPDrawerState());
          } else if (drawerName === 'commentDrawerState') {
            dispatch(setCommentDrawerState(false));
            dispatch(resetCommentDrawerState());
          } else if (drawerName === 'editPPCategoryDrawerState') {
            dispatch(setEditPPCategoryDrawerState(false));
            dispatch(resetEditPPCategoryDrawer());
          } else if (drawerName === 'placeInfoDrawerState') {
            dispatch(setPlaceInfoDrawerState(false));
            dispatch(resetPlacePickInfoState());
          } else if (drawerName === 'ppCategoryDetailListDrawerState') {
            dispatch(setPPCategoryDetailListDrawerState(false));
            dispatch(resetPPCategoryDetailListDrawer());
          } else if (drawerName === 'ppCategoryListDrawerState') {
            dispatch(setPPCategoryDrawerState(false));
          }
        }
      });
    },
    [dispatch, drawerStates]
  );

  useEffect(() => {
    const openDrawer = Object.entries(drawerStates).find(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, isOpen]) => isOpen
    );

    if (openDrawer) {
      const [openDrawerName] = openDrawer;
      closeOtherDrawers(openDrawerName);
    }
  }, [drawerStates, closeOtherDrawers]);

  const drawerComponents = useMemo(
    () => [
      CommentDrawer,
      AddPPCategory,
      AddPPDrawer,
      EditPPCategory,
      PPCategoryDetailList,
      PPCategoryList,
      PlaceInfo,
    ],
    []
  );

  return drawerComponents.map((DrawerComponent, index) => (
    <DrawerComponent key={index} />
  ));
}
