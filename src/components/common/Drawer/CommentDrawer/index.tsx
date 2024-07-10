import Divider from '@mui/material/Divider';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import { useCommentDrawer } from '@/store/slice/drawer/useDrawerController';
import ProfileImage from '@/components/common/ProfileImage';
import formatTime, { generateTimestamps } from '@/utils/formatTime';
import { Fragment, useEffect, useState } from 'react';
import ConfirmModal from '@/components/common/ConfirmModal';
import { getLabelByCode } from '@/store/slice/modal/modalLabelData';
import useModalController from '@/store/slice/modal/useModalController';

interface CommentDataType {
  id: number;
  createDate: string;
  contents: string;
  nickname: string;
  profileImageUrl: string;
}

const useTempCommentData = () => {
  const [commentData, setCommentData] = useState<CommentDataType[]>([]);

  useEffect(() => {
    setCommentData([
      {
        id: 1,
        createDate: formatTime(generateTimestamps().nDaysAgo),
        contents: '나도 가보고 싶다',
        nickname: '김지은',
        profileImageUrl:
          'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/14/16d84d9f-7f3d-498c-a9cb-c4de2ee45655.jpg',
      },
      {
        id: 2,
        createDate: formatTime(generateTimestamps().nDaysAgo),
        contents: '웨스턴호텔이 조식이 별로군요...',
        nickname: '안소희',
        profileImageUrl:
          'https://i.namu.wiki/i/nmjxLk-1n4erK3wIV_Cg5-uHT3vwcVhQ2bpoPVIBZXsNDmrfZTkC_YcnJQqMKz3kVXuRfxs8HD9GBYVtsc66mw.webp',
      },
      {
        id: 3,
        createDate: formatTime(generateTimestamps().nHoursAgo),
        contents: '세종은 비 미친듯이 왔다는데 여긴 흐리기만하넹',
        nickname: '권나라',
        profileImageUrl:
          'https://i.namu.wiki/i/GY5-wB2Nk17pznbbGli2a6hgUxYDYBsqcTheKrFDxau594zoBZsc9ceDd7VWnrFjUazpxu_ASBVg7Y-9E2DhuQ.webp',
      },
      {
        id: 4,
        createDate: formatTime(generateTimestamps().nHoursAgo),
        contents: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋ든든하다 든든해',
        nickname: '백지헌',
        profileImageUrl:
          'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1iNUWs.img?w=650&h=866&m=6&x=204&y=206&s=212&d=212',
      },
    ]);
  }, []);

  return commentData;
};

export default function CommentDrawer() {
  const {
    commentDrawerToggleHandler,
    setCommentDrawerHandler,
    commentDrawerState,
  } = useCommentDrawer();
  const commentData = useTempCommentData();
  const { setLabelHandler, setModalStateHandler } = useModalController();

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
        title={'댓글'}
        buttonRender={false}
      >
        <div className="rounded-t-lg">
          {commentData.map(
            ({ createDate, contents, id, profileImageUrl, nickname }) => (
              <Fragment key={id}>
                <div className="p-4 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        {/*  TODO: 임시 데이터 수정 */}
                        <ProfileImage
                          profileImageUrl={profileImageUrl}
                          nickname={nickname}
                          createdDate={createDate}
                        />
                        <div className="text-sm text-gray-500 space-x-2">
                          <button>수정</button>
                          <button onClick={confirmHandler}>삭제</button>
                        </div>
                      </div>
                      <p className="mt-1 ml-4 text-black">{contents}</p>
                    </div>
                  </div>
                </div>
                <Divider />
              </Fragment>
            )
          )}
        </div>
      </SwipeableDrawerWrapper>
      <ConfirmModal />
    </>
  );
}
