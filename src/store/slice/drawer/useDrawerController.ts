import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setAddPPCategoryState,
  setAddPPState,
  setCommentDrawerState,
  toggleAddPPCategoryState,
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
  const addPPCategoryState = useAppSelector(
    (state) => state.drawer.addPPCategoryState
  );
  const dispatch = useAppDispatch();

  const ppCategoryDrawerOpenHandler = () => {
    dispatch(setAddPPCategoryState(true));
  };
  const setPPCategoryDrawerHandler = (state: boolean) => {
    dispatch(setAddPPCategoryState(state));
  };

  const ppCategoryDrawerToggleHandler = () => {
    dispatch(toggleAddPPCategoryState());
  };

  return {
    addPPCategoryState,
    ppCategoryDrawerOpenHandler,
    setPPCategoryDrawerHandler,
    ppCategoryDrawerToggleHandler,
  };
}

export function useAddPPDrawer() {
  const addPPDrawer = useAppSelector((state) => state.drawer.addPPState);
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
    addPPDrawer,
    addPPDrawerOpenHandler,
    setAddPPDrawerHandler,
    addPPDrawerToggleHandler,
  };
}
