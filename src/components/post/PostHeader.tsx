import * as React from 'react';
import classes from './styles.module.scss';
import ProfileImage from '@/components/common/ProfileImage';
import formatTime from '@/utils/formatTime';

interface IPostHeaderProps {
  profileImageUrl: string;
  visitDate: Date;
  userName: string;
  userId: string;
}

export default function PostHeader({
  visitDate,
  userName,
  profileImageUrl,
  userId,
}: IPostHeaderProps) {
  return (
    <div className={classes.cardHeader}>
      <ProfileImage
        userId={userId}
        profileImageUrl={profileImageUrl}
        userName={userName}
        visitDate={formatTime(visitDate)}
      />
    </div>
  );
}
