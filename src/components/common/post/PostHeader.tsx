import Link from 'next/link';
import MuiAvatar from '@mui/material/Avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import classes from './styles.module.scss';
import { CardHeader } from './ui/card';
import { Avatar } from '@/components/common/post/ui/avatar';

export default function PostHeader() {
  return (
    <CardHeader className={classes.cardHeader}>
      <Link className={classes.avatarWrapper} href="#">
        <Avatar className={classes.avatar}>
          <MuiAvatar
            alt="닉네임"
            src="https://bhent.co.kr/static/b462f1e43a52d27749502c5e6ad51eaa/0d250/%25EC%2595%2588%25EC%2586%258C%25ED%259D%25AC_%25EA%25B0%2580%25EB%25A1%259C%25ED%2598%2595_celdna.jpg"
          />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        닉네임
        <span className={classes.postTimestamp}>2시간 전</span>
      </Link>
      <div style={{ cursor: 'pointer' }}>
        <ContentCopyIcon />
      </div>
    </CardHeader>
  );
}
