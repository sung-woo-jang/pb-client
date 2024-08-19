import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setAddPPDrawerState,
  setEditPPCategoryDrawerState,
  toggleAddPPDrawerState,
  toggleEditPPCategoryDrawerState,
} from '@/store/slice/drawer/slice';

export function useAddPPDrawer() {
  const addPPDrawerState = useAppSelector(
    (state) => state.drawer.addPPDrawerState
  );
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

  return {
    addPPDrawerState,
    addPPDrawerOpenHandler,
    setAddPPDrawerHandler,
    addPPDrawerToggleHandler,
    addPPDrawerCloseHandler,
  };
}

export function useEditPPCategoryDrawer() {
  const editPPCategoryDrawerState = useAppSelector(
    (state) => state.drawer.editPPCategoryDrawerState
  );

  const dispatch = useAppDispatch();

  const editPPCategoryDrawerOpenHandler = () => {
    dispatch(setEditPPCategoryDrawerState(true));
  };

  const setEditPPCategoryDrawerHandler = (state: boolean) => {
    dispatch(setEditPPCategoryDrawerState(state));
  };

  const editPPCategoryDrawerToggleHandler = () => {
    dispatch(toggleEditPPCategoryDrawerState());
  };

  return {
    editPPCategoryDrawerState,
    editPPCategoryDrawerOpenHandler,
    setEditPPCategoryDrawerHandler,
    editPPCategoryDrawerToggleHandler,
  };
}
