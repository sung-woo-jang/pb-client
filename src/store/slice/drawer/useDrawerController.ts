import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setAddPPCategoryState,
  setAddPPState,
  setCommentDrawerState,
  toggleAddPPCategoryDrawerState,
  toggleAddPPState,
  toggleCommentDrawer,
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
    dispatch(setAddPPState(true));
  };

  const setAddPPDrawerHandler = (state: boolean) => {
    dispatch(setAddPPState(state));
  };

  const addPPDrawerToggleHandler = () => {
    dispatch(toggleAddPPState());
  };

  return {
    addPPDrawerState,
    addPPDrawerOpenHandler,
    setAddPPDrawerHandler,
    addPPDrawerToggleHandler,
  };
}
