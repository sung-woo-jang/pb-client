import classes from './styles.module.scss';
import PostHeader from './PostHeader';
import PostImageSwiper from './PostImageSwiper';
import PostFooter from './PostFooter';
import PlacePickCard from '../PlacePickCard';
import { Card } from './ui/card';
import Comment from './Comment';
import CustomSwipeableDrawer from '@/components/common/Drawer/CustomSwipeableDrawer';
import * as React from 'react';

export default function PostCard() {
  return (
    <Card className={classes.card}>
      <PostHeader />
      <PostImageSwiper />
      <PostFooter />
      <PlacePickCard />
      <CustomSwipeableDrawer>
        <Comment />
      </CustomSwipeableDrawer>
    </Card>
  );
}
