import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setCommentDrawerState,
  setCommentPostId,
  toggleCommentDrawer,
} from '@/store/slice/drawer/commentDrawer/slice';

export default function useCommentDrawer() {
  const commentDrawerState = useAppSelector(
    (state) => state.commentDrawer.commentDrawerState
  );

  const commentPostId = useAppSelector(
    (state) => state.commentDrawer.commentPostId
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

  const setCommentPostIdHandler = (postId: number) => {
    dispatch(setCommentPostId(postId));
  };

  return {
    commentPostId,
    commentDrawerState,
    commentDrawerOpenHandler,
    setCommentDrawerHandler,
    commentDrawerToggleHandler,
    setCommentPostIdHandler,
  };
}
