import { useState } from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import useCommentDrawer from '@/store/slice/drawer/commentDrawer/useCommentDrawer';
import useGetComments from '@/api/comment/getComments';
import useCreateComment from '@/api/comment/createComment';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';

export default function CommentDrawer() {
  const {
    commentDrawerToggleHandler,
    setCommentDrawerHandler,
    commentDrawerState,
    commentPostId: post_id,
  } = useCommentDrawer();
  const [comment, setComment] = useState('');
  const queryClient = useQueryClient();
  const { data, isSuccess, isLoading } = useGetComments(
    post_id,
    commentDrawerState
  );

  const { mutateAsync } = useCreateComment();

  const createCommentHandler = async () => {
    await mutateAsync(
      {
        post_id,
        comment,
      },
      {
        onSuccess: () => {
          setComment('');
          queryClient.invalidateQueries({
            queryKey: generateQueryKeysFromUrl(
              API_URL.COMMENT.GET_COMMENT(post_id)
            ),
          });
        },
      }
    );
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
