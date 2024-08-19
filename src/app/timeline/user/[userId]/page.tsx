'use client';
import classes from '@/app/timeline/styles.module.scss';
import TimelineProfile from '@/app/timeline/_components/TimelineProfile';
import TimelineImages from '@/app/timeline/_components/TimelineImages';
import useGetTimelineList from '@/api/timeline/getTimelineList';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import useGetFollowCountByUserId from '@/api/follow/getFollowCountByUserId';

interface ITimelineByUserPageProps {
  params: { userId: string };
}

export default function Page({ params }: ITimelineByUserPageProps) {
  const timelineList = useGetTimelineList(params.userId);
  const followCount = useGetFollowCountByUserId(params.userId);
  if (timelineList.isLoading && followCount.isLoading)
    return <LoadingSpinner size={60} />;
  else if (followCount.isSuccess && timelineList.isSuccess)
    return (
      <div className={classes.timelineWrapper}>
        <div className={classes.timelineContainer}>
          <TimelineProfile
            nickname={timelineList.data.data.nickname}
            profileImageUrl={timelineList.data.data.profileImage}
            follower={followCount.data.data.followers}
            following={followCount.data.data.followings}
          />
          <TimelineImages posts={timelineList.data.data.posts} />
        </div>
      </div>
    );
}
