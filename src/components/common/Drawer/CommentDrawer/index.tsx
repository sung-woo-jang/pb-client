import { useState } from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import useCommentDrawer from '@/store/slice/drawer/commentDrawer/useCommentDrawer';
import useGetComments from '@/api/comment/getComments';
import useCreateComment from '@/api/comment/createComment';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function CommentDrawer() {
  const {
    commentDrawerToggleHandler,
    setCommentDrawerHandler,
    commentDrawerState,
    commentPostId,
  } = useCommentDrawer();
  const [comment, setComment] = useState('');

  const { data, isSuccess, refetch, isLoading } = useGetComments(
    commentPostId,
    commentDrawerState
  );

  const { mutateAsync } = useCreateComment();

  const createCommentHandler = async () => {
    await mutateAsync({
      post_id: commentPostId,
      comment,
    });
    await refetch();
    setComment('');
  };

  if (isLoading) return <LoadingSpinner size={60} />;

  return (
    <SwipeableDrawerWrapper
      drawerState={commentDrawerState}
      setHandler={setCommentDrawerHandler}
      toggleHandler={commentDrawerToggleHandler}
      title={'댓글'}
      buttonRender={false}
    >
      {isSuccess && (
        <>
          <CommentList comments={data} />
          <CommentInput
            comment={comment}
            setComment={setComment}
            createCommentHandler={createCommentHandler}
          />
        </>
      )}
    </SwipeableDrawerWrapper>
  );
}
