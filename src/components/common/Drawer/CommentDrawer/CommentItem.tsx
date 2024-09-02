import React, { useState } from 'react';
import useModalController from '@/store/slice/modal/useModalController';
import { getLabelByCode } from '@/store/slice/modal/modalLabelData';
import ProfileImage from '@/components/common/ProfileImage';
import { IGetCommentsResponseData } from '@/api/comment/getComments';
import dayjs from 'dayjs';
import useGetMyInfo from '@/api/auth/getMyInfo';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface CommentItemProps {
  comment: IGetCommentsResponseData;
}

export default function CommentItem({ comment }: CommentItemProps) {
  const { setLabelHandler, setModalStateHandler } = useModalController();
  const { data: myInfo, isSuccess, isLoading } = useGetMyInfo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const confirmHandler = () => {
    setLabelHandler(getLabelByCode('MO-CO-DE'));
    setModalStateHandler(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // 여기서는 실제 API 호출 없이 UI 상태만 변경합니다.
    //
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedComment(comment.comment);
    setIsEditing(false);
  };

  if (isLoading) return <LoadingSpinner size={60} />;
  if (!isSuccess) return null;

  const buttonStyle =
    'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200';

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <ProfileImage
              userId={comment.user.id}
              profileImageUrl={comment.user.profileImage}
              userName={comment.user.name}
              visitDate={dayjs(comment.createdAt).format('YYYY-MM-DD')}
            />
            {myInfo.id === comment.user.id && (
              <div className="space-x-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className={`${buttonStyle} bg-blue-500 text-white hover:bg-blue-600`}
                    >
                      저장
                    </button>
                    <button
                      onClick={handleCancel}
                      className={`${buttonStyle} bg-gray-200 text-gray-700 hover:bg-gray-300`}
                    >
                      취소
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleEdit}
                      className={`${buttonStyle} bg-gray-200 text-gray-700 hover:bg-gray-300`}
                    >
                      수정
                    </button>
                    <button
                      onClick={confirmHandler}
                      className={`${buttonStyle} bg-red-500 text-white hover:bg-red-600`}
                    >
                      삭제
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
          {isEditing ? (
            <textarea
              className="mt-1 ml-4 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              rows={3}
            />
          ) : (
            <p className="mt-1 ml-4 text-black">{comment.comment}</p>
          )}
        </div>
      </div>
    </div>
  );
}
