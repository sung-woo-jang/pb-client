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
        alt="Remy Sharp"
        src={generateProfileImageUrl(profileImageUrl)}
        className="w-24 h-24"
      />
      <div className="text-center">
        <div className="text-xl font-bold">{nickname}</div>
        <div className="text-sm text-muted-foreground">자기소개</div>
        <div className="flex space-x-4">
          <div className="text-sm">팔로워 {follower}</div>
          <div className="text-sm">팔로잉 {following}</div>
        </div>
      </div>
    </div>
  );
}
