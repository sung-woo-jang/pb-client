import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import classes from './styles.module.scss';
import { CardHeader } from './ui/card';
import ProfileImage from '@/components/common/ProfileImage';

export default function PostHeader() {
  return (
    <CardHeader className={classes.cardHeader}>
      <ProfileImage />
      <div style={{ cursor: 'pointer' }}>
        <ContentCopyIcon />
      </div>
    </CardHeader>
  );
}
