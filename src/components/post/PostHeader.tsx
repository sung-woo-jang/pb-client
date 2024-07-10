import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import * as React from 'react';
import { useEffect, useState } from 'react';
import classes from './styles.module.scss';
import ProfileImage from '@/components/common/ProfileImage';
import formatTime, { generateTimestamps } from '@/utils/formatTime';

export default function PostHeader() {
  const [createdDate, setCreatedDate] = useState<string>('');
  useEffect(() => {
    setCreatedDate(formatTime(generateTimestamps().nDaysAgo));
  }, []);
  return (
    <div className={classes.cardHeader}>
      {/*  TODO: 임시 데이터 수정 */}
      <ProfileImage
        profileImageUrl={
          'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/14/16d84d9f-7f3d-498c-a9cb-c4de2ee45655.jpg'
        }
        nickname={'김지은'}
        createdDate={createdDate}
      />
      <div style={{ cursor: 'pointer' }}>
        <ContentCopyIcon />
      </div>
    </div>
  );
}
