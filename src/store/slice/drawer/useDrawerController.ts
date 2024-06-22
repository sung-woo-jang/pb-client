import { useAppDispatch } from '@/hooks/redux-hooks';
import {
  setCommentDrawerState,
  toggleCommentDrawer,
} from '@/store/slice/drawer/slice';

export function useCommentDrawer() {
  const dispatch = useAppDispatch();

  const commentDrawerOpenHandler = () => {
    dispatch(setCommentDrawerState(true));
  };

  const commentDrawerToggleHandler = () => {
    dispatch(toggleCommentDrawer());
  };

  return { commentDrawerOpenHandler, commentDrawerToggleHandler };
}
