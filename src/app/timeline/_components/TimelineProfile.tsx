import classes from '@/app/timeline/styles.module.scss';
import Avatar from '@mui/material/Avatar';

export default function TimelineProfile() {
  return (
    <div className={classes.profile}>
      <Avatar
        alt="Remy Sharp"
        src="/placeholder-user.jpg"
        className="w-24 h-24"
      />
      <div className="text-center">
        <div className="text-xl font-bold">닉네임</div>
        <div className="text-sm text-muted-foreground">자기소개</div>
        <div className="flex space-x-4">
          <div className="text-sm">팔로워 10</div>
          <div className="text-sm">팔로잉 3</div>
        </div>
      </div>
    </div>
  );
}
