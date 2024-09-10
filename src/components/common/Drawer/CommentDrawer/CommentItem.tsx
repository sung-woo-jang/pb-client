import React, { useState } from 'react';
import { IGetCommentsResponseData } from '@/api/comment/getComments';
import useGetMyInfo from '@/api/auth/getMyInfo';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import useUpdateComment from '@/api/comment/updateComment';
import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import useCommentDrawer from '@/store/slice/drawer/commentDrawer/useCommentDrawer';
import CommentHaader from '@/components/common/Drawer/CommentDrawer/CommentHaader';
import CommentContent from '@/components/common/Drawer/CommentDrawer/CommentContent';
import CommentControlPanel from '@/components/common/Drawer/CommentDrawer/CommentControlPanel';

interface CommentItemProps {
  comment: IGetCommentsResponseData;
}

export default function CommentItem({ comment }: CommentItemProps) {
  const queryClient = useQueryClient();
  const { commentPostId } = useCommentDrawer();
  // Todo: 유저정보 안전하게 관리하게 되면 이 부분 queryClient로 변경
  const { data: myInfo, isSuccess, isLoading } = useGetMyInfo();
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const { mutateAsync } = useUpdateComment();
  const handleSave = async () => {
    await mutateAsync(
      { comment: editedComment, id: comment.id },
      {
        onSuccess: () => {
          if (commentPostId !== 0)
            queryClient.invalidateQueries({
              queryKey: generateQueryKeysFromUrl(
                API_URL.COMMENT.GET_COMMENT(commentPostId)
              ),
            });
        },
      }
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedComment(comment.comment);
    setIsEditing(false);
  };

  // TODO: queryClient 사용하게 될 시 LoadingSpinner -> 다른 링크로 이동하도록 수정
  if (isLoading) return <LoadingSpinner size={60} />;
  if (!isSuccess) return null;

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <CommentHaader comment={comment} />
            {myInfo.id === comment.user.id && (
              <CommentControlPanel
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            )}
          </div>
          <CommentContent
            isEditing={isEditing}
            comment={comment.comment}
            editedComment={editedComment}
            setEditedComment={setEditedComment}
          />
        </div>
      </div>
    </div>
  );
}
