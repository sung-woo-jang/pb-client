import classes from '@/app/timeline/styles.module.scss';
import Avatar from '@mui/material/Avatar';
import { generateProfileImageUrl } from '@/utils/generateImageUrl';

interface ITimelineProfileProps {
  nickname: string;
  follower: number;
  following: number;
  profileImageUrl: string;
}

export default function TimelineProfile({
  follower,
  following,
  nickname,
  profileImageUrl,
}: ITimelineProfileProps) {
  return (
    <div className={classes.profile}>
      <Avatar
        alt={nickname}
        src={generateProfileImageUrl(profileImageUrl)}
        className={classes.avatar}
      />
      <div className={classes.info}>
        <h2 className={classes.nickname}>{nickname}</h2>
        <p className={classes.bio}>자기소개</p>
        <div className={classes.stats}>
          <div>
            팔로워 <span>{follower}</span>
          </div>
          <div>
            팔로잉 <span>{following}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
