import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import * as React from 'react';
import classes from './styles.module.scss';
import ProfileImage from '@/components/common/ProfileImage';
import formatTime from '@/utils/formatTime';

interface IPostHeaderProps {
  profileImageUrl: string;
  visitDate: Date;
  nickname: string;
}

export default function PostHeader({
  visitDate,
  nickname,
  profileImageUrl,
}: IPostHeaderProps) {
  return (
    <div className={classes.cardHeader}>
      <ProfileImage
        profileImageUrl={profileImageUrl}
        nickname={nickname}
        visitDate={formatTime(visitDate)}
      />
      <div style={{ cursor: 'pointer' }}>
        <ContentCopyIcon />
      </div>
    </div>
  );
}
