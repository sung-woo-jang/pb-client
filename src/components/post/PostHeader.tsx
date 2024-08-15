import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import * as React from 'react';
import classes from './styles.module.scss';
import ProfileImage from '@/components/common/ProfileImage';
import formatTime from '@/utils/formatTime';

interface IPostHeaderProps {
  profileImageUrl: string;
  visitDate: Date;
  userName: string;
}

export default function PostHeader({
  visitDate,
  userName,
  profileImageUrl,
}: IPostHeaderProps) {
  return (
    <div className={classes.cardHeader}>
      <ProfileImage
        profileImageUrl={profileImageUrl}
        userName={userName}
        visitDate={formatTime(visitDate)}
      />
      <div style={{ cursor: 'pointer' }}>
        <ContentCopyIcon />
      </div>
    </div>
  );
}
