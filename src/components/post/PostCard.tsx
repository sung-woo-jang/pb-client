import classes from './styles.module.scss';
import PostHeader from './PostHeader';
import PostImageSwiper from './PostImageSwiper';
import PostFooter from './PostFooter';
import PlacePickCard from '../common/PlacePickCard';
import { Card } from './ui/card';
import CommentDrawer from '../common/Drawer/CommentDrawer';
import AddPPCategory from '@/components/common/Drawer/AddPPCategory';

export default function PostCard() {
  return (
    <Card className={classes.card}>
      <PostHeader />
      <PostImageSwiper />
      <PostFooter />
      <PlacePickCard />
      <CommentDrawer />
      <AddPPCategory />
    </Card>
  );
}
