import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setAddPPCategoryState,
  setAddPPDrawerState,
  setCommentDrawerState,
  setEditPPCategoryDrawerState,
  toggleAddPPCategoryDrawerState,
  toggleAddPPDrawerState,
  toggleCommentDrawer,
  toggleEditPPCategoryDrawerState,
} from '@/store/slice/drawer/slice';

export function useCommentDrawer() {
  const commentDrawerState = useAppSelector(
    (state) => state.drawer.commentDrawerState
  );
  const dispatch = useAppDispatch();

  const commentDrawerOpenHandler = () => {
    dispatch(setCommentDrawerState(true));
  };
  const setCommentDrawerHandler = (state: boolean) => {
    dispatch(setCommentDrawerState(state));
  };

  const commentDrawerToggleHandler = () => {
    dispatch(toggleCommentDrawer());
  };

  return {
    commentDrawerState,
    commentDrawerOpenHandler,
    commentDrawerToggleHandler,
    setCommentDrawerHandler,
  };
}

export function useAddPPCategoryDrawer() {
  const addPPCategoryDrawerState = useAppSelector(
    (state) => state.drawer.addPPCategoryDrawerState
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

  return {
    addPPCategoryDrawerState,
    ppCategoryDrawerOpenHandler,
    setPPCategoryDrawerHandler,
    ppCategoryDrawerToggleHandler,
  };
}

export function useAddPPDrawer() {
  const addPPDrawerState = useAppSelector(
    (state) => state.drawer.addPPDrawerState
  );
  const dispatch = useAppDispatch();

  const addPPDrawerOpenHandler = () => {
    dispatch(setAddPPDrawerState(true));
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
