'use client';
import CommentDrawer from '@/components/common/Drawer/CommentDrawer';
import AddPPCategory from '@/components/common/Drawer/AddPPCategory';
import AddPPDrawer from '@/components/common/Drawer/AddPPDrawer';
import EditPPCategory from '@/components/common/Drawer/EditPPCategory';
import PPCategoryDetailList from '@/components/common/Drawer/PPCategoryDetailList';
import PPCategoryList from '@/components/common/Drawer/PPCategoryList';
import isUndefined from 'lodash/isUndefined';
import isEqual from 'lodash/isEqual';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { useEffect, useRef } from 'react';
import { setAddPPCategoryState } from '@/store/slice/drawer/addPPCategoryDrawer/slice';
import { setAddPPDrawerState } from '@/store/slice/drawer/addPPDrawer/slice';
import { setCommentDrawerState } from '@/store/slice/drawer/commentDrawer/slice';
import { setEditPPCategoryDrawerState } from '@/store/slice/drawer/editPPCategoryDrawer/slice';
import { setPPCategoryDetailListDrawerState } from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/slice';
import { setPPCategoryDrawerState } from '@/store/slice/drawer/ppCategoryList/slice';

export default function Drawer() {
  const dispatch = useAppDispatch();

  const drawerStates = useAppSelector((state) => ({
    addPPCategoryDrawerState:
      state.addPPCategoryDrawer.addPPCategoryDrawerState,
    addPPDrawerState: state.addPPDrawer.addPPDrawerState,
    commentDrawerState: state.commentDrawer.commentDrawerState,
    editPPCategoryDrawerState:
      state.editPPCategoryDrawer.editPPCategoryDrawerState,
    ppCategoryDetailListDrawerState:
      state.ppCategoryDetailListDrawer.ppCategoryDetailListDrawerState,
    ppCategoryListDrawerState:
      state.ppCategoryListDrawer.ppCategoryListDrawerState,
  }));

  const prevObjRef = useRef(drawerStates);

  useEffect(() => {
    if (!isEqual(prevObjRef, drawerStates)) {
      prevObjRef.current = drawerStates;
      const openDrawer = Object.entries(drawerStates).find(
        ([_, isOpen]) => isOpen
      );

      if (!isUndefined(openDrawer)) {
        const [openDrawerName] = openDrawer;

        Object.entries(drawerStates).forEach(([drawerName, isOpen]) => {
          if (!isEqual(drawerName, openDrawerName) && isOpen) {
            switch (drawerName) {
              case 'addPPCategoryDrawerState':
                dispatch(setAddPPCategoryState(false));
                break;
              case 'addPPDrawerState':
                dispatch(setAddPPDrawerState(false));
                break;
              case 'commentDrawerState':
                dispatch(setCommentDrawerState(false));
                break;
              case 'editPPCategoryDrawerState':
                dispatch(setEditPPCategoryDrawerState(false));
                break;
              case 'ppCategoryDetailListDrawerState':
                dispatch(setPPCategoryDetailListDrawerState(false));
                break;
              case 'ppCategoryListDrawerState':
                dispatch(setPPCategoryDrawerState(false));
                break;
            }
          }
        });
      }
    }
  }, [drawerStates, dispatch]);

  return (
    <>
      <CommentDrawer />
      <AddPPCategory />
      <AddPPDrawer />
      <EditPPCategory />
      <PPCategoryDetailList />
      <PPCategoryList />
    </>
  );
}
