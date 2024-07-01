import classes from './styles.module.scss';
import TimelineImages from '@/app/timeline/_components/TimelineImages';
import TimelineProfile from '@/app/timeline/_components/TimelineProfile';

export default function Page() {
  return (
    <div className={classes.timelineWrapper}>
      <div className={classes.timelineContainer}>
        <TimelineProfile />
        <TimelineImages />
      </div>
    </div>
  );
}
