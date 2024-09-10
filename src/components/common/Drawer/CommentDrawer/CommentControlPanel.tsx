import React from 'react';
import useModalController from '@/store/slice/modal/useModalController';
import { getLabelByCode } from '@/store/slice/modal/modalLabelData';
import ConfirmModal from '@/components/common/ConfirmModal';
import useDeleteComment from '@/api/comment/deleteComment';
import { IGetCommentsResponseData } from '@/api/comment/getComments';
import useCommentDrawer from '@/store/slice/drawer/commentDrawer/useCommentDrawer';
import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';

interface CommentControlPanelProps {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  onSave: () => void;
  onCancel: () => void;
  comment: IGetCommentsResponseData;
}

const buttonStyle =
  'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200';

export default function CommentControlPanel({
  onSave,
  onCancel,
  setIsEditing,
  isEditing,
  comment,
}: CommentControlPanelProps) {
  const { setLabelHandler, setModalStateHandler } = useModalController();
  const queryClient = useQueryClient();
  const { commentPostId } = useCommentDrawer();
  const confirmHandler = () => {
    setLabelHandler(getLabelByCode('MO-CO-DE'));
    setModalStateHandler(true);
  };

  const { mutateAsync } = useDeleteComment();

  const deleteCommentHandler = async (callbackFn: () => void) => {
    await mutateAsync(comment.id, {
      onSuccess: () => {
        if (commentPostId !== 0) {
          queryClient.invalidateQueries({
            queryKey: generateQueryKeysFromUrl(
              API_URL.COMMENT.GET_COMMENT(commentPostId)
            ),
          });
        }
        callbackFn();
      },
    });
  };

  return (
    <div className="space-x-2">
      {isEditing ? (
        <>
          <button
            onClick={onSave}
            className={`${buttonStyle} bg-blue-500 text-white hover:bg-blue-600`}
          >
            저장
          </button>
          <button
            onClick={onCancel}
            className={`${buttonStyle} bg-gray-200 text-gray-700 hover:bg-gray-300`}
          >
            취소
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
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
          <ConfirmModal confirmHandler={deleteCommentHandler} />
        </>
      )}
    </div>
  );
}
