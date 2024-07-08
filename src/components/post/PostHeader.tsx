import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import * as React from 'react';
import classes from './styles.module.scss';
import ProfileImage from '@/components/common/ProfileImage';

export default function PostHeader() {
  return (
    <div className={classes.cardHeader}>
      <ProfileImage />
      <div style={{ cursor: 'pointer' }}>
        <ContentCopyIcon />
      </div>
    </div>
  );
}
