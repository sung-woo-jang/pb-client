import * as React from 'react';
import classes from './styles.module.scss';
import PostHeader from './PostHeader';
import PostImageSwiper from './PostImageSwiper';
import PostFooter from './PostFooter';
import PlacePickCard from '../common/PlacePickCard';

export default function PostCard() {
  return (
    <div className={classes.card}>
      <PostHeader />
      <PostImageSwiper />
      <PostFooter />
      <PlacePickCard />
    </div>
  );
}
