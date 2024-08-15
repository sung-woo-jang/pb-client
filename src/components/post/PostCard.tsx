import * as React from 'react';
import classes from './styles.module.scss';
import PostHeader from './PostHeader';
import PostImageSwiper from './PostImageSwiper';
import PostFooter from './PostFooter';
import PlacePickCard from '../common/PlacePickCard';
import { IGetNewsfeedApiResponseData } from '@/api/newsfeed/getNewsFeeds';

interface IPostCardProps {
  newsfeed: IGetNewsfeedApiResponseData;
}

export default function PostCard({ newsfeed }: IPostCardProps) {
  const { visitDate, content, user, images, place, rate, id } = newsfeed;

  return (
    <div className={classes.card}>
      <PostHeader
        visitDate={visitDate}
        userName={user.name}
        profileImageUrl={user.profileImage}
      />
      <PostImageSwiper images={images} />
      <PostFooter postId={id} content={content} rate={rate} />
      <PlacePickCard place={place} />
    </div>
  );
}
