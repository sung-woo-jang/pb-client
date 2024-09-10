import ProfileImage from '@/components/common/ProfileImage';
import dayjs from 'dayjs';
import React from 'react';
import { IGetCommentsResponseData } from '@/api/comment/getComments';

interface CommentHaaderProps {
  comment: IGetCommentsResponseData;
}

export default function CommentHaader({ comment }: CommentHaaderProps) {
  return (
    <ProfileImage
      userId={comment.user.id}
      profileImageUrl={comment.user.profileImage}
      userName={comment.user.name}
      visitDate={dayjs(comment.createdAt).format('YYYY-MM-DD')}
    />
  );
}
