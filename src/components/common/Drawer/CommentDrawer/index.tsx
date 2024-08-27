import Divider from '@mui/material/Divider';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';

import ProfileImage from '@/components/common/ProfileImage';
import { Fragment, useState } from 'react';
import ConfirmModal from '@/components/common/ConfirmModal';
import { getLabelByCode } from '@/store/slice/modal/modalLabelData';
import useModalController from '@/store/slice/modal/useModalController';
import useGetComments from '@/api/comment/getComments';
import dayjs from 'dayjs';
import useCommentDrawer from '@/store/slice/drawer/commentDrawer/useCommentDrawer';
import useCreateComment from '@/api/comment/createComment';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function CommentDrawer() {
  const {
    commentDrawerToggleHandler,
    setCommentDrawerHandler,
    commentDrawerState,
    commentPostId,
  } = useCommentDrawer();
  const { setLabelHandler, setModalStateHandler } = useModalController();
  const [comment, setComment] = useState('');

  const { data, isSuccess, refetch, isLoading } = useGetComments(
    commentPostId,
    commentDrawerState
  );

  const confirmHandler = () => {
    setLabelHandler(getLabelByCode('MO-CO-DE'));
    setModalStateHandler(true);
  };
  // 댓글 등록
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
  else if (isSuccess) {
    // TODO: 댓글 수정, 삭제도 이루어져야함
    return (
      <>
        <SwipeableDrawerWrapper
          drawerState={commentDrawerState}
          setHandler={setCommentDrawerHandler}
          toggleHandler={commentDrawerToggleHandler}
          // TODO: CODE 데이터로 변경
          title={'댓글'}
          buttonRender={false}
        >
          <div className="rounded-t-lg">
            {data.map(({ user, id, comment, createdAt }) => (
              <Fragment key={id}>
                <div className="p-4 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <ProfileImage
                          userId={user.id}
                          profileImageUrl={user.profileImage}
                          userName={user.name}
                          visitDate={dayjs(createdAt).format('YYYY-MM-DD')}
                        />
                        <div className="text-sm text-gray-500 space-x-2">
                          <button>수정</button>
                          <button onClick={confirmHandler}>삭제</button>
                        </div>
                      </div>
                      <p className="mt-1 ml-4 text-black">{comment}</p>
                    </div>
                  </div>
                </div>
                <Divider />
              </Fragment>
            ))}
          </div>
          <div className="p-4 bg-white border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => {
                  e.stopPropagation();
                  setComment(e.target.value);
                }}
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
                placeholder="댓글을 입력하세요..."
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                onClick={createCommentHandler}
              >
                댓글 등록
              </button>
            </div>
          </div>
        </SwipeableDrawerWrapper>
        <ConfirmModal />
      </>
    );
  }
}
