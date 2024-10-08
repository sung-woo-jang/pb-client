import * as React from 'react';
import classes from './styles.module.scss';
import PostHeader from './PostHeader';
import PostImageSwiper from './PostImageSwiper';
import PostFooter from './PostFooter';
import PlacePickCard from '../common/PlacePick/PlacePickCard';
import { IGetNewsfeedApiResponseData } from '@/api/newsfeed/getNewsFeeds';

interface IPostCardProps {
  newsfeed: IGetNewsfeedApiResponseData;
}

export default function PostCard({ newsfeed }: IPostCardProps) {
  const { visitDate, content, user, images, place, rate, id, likes, keywords } =
    newsfeed;

  return (
    <div className={classes.card}>
      <PostHeader
        visitDate={visitDate}
        userName={user.name}
        profileImageUrl={user.profileImage}
        userId={user.id}
      />
      <PostImageSwiper images={images} />
      <PostFooter
        postId={id}
        content={content}
        rate={rate}
        likes={likes}
        keywords={keywords}
      />
      <PlacePickCard place={place} />
    </div>
  );
}
