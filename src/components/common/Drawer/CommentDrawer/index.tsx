import Divider from '@mui/material/Divider';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import { useCommentDrawer } from '@/store/slice/drawer/useDrawerController';
import ProfileImage from '@/components/common/ProfileImage';
import { Fragment } from 'react';
import ConfirmModal from '@/components/common/ConfirmModal';
import { getLabelByCode } from '@/store/slice/modal/modalLabelData';
import useModalController from '@/store/slice/modal/useModalController';
import useGetComments from '@/api/comment/getComments';
import dayjs from 'dayjs';

export default function CommentDrawer() {
  const {
    commentDrawerToggleHandler,
    setCommentDrawerHandler,
    commentDrawerState,
    postId,
  } = useCommentDrawer();
  const { setLabelHandler, setModalStateHandler } = useModalController();

  const { data, isSuccess } = useGetComments(postId, commentDrawerState);

  const confirmHandler = () => {
    setLabelHandler(getLabelByCode('MO-CO-DE'));
    setModalStateHandler(true);
  };

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
          {isSuccess &&
            data.data.map(({ user, id, comment, createdAt }) => (
              <Fragment key={id}>
                <div className="p-4 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <ProfileImage
                          profileImageUrl={user.profileImage}
                          nickname={user.nickname}
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
      </SwipeableDrawerWrapper>
      <ConfirmModal />
    </>
  );
}
