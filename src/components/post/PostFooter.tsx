import { CardFooter } from './ui/card';
import classes from './styles.module.scss';

import { Button } from '@/components/post/ui/button';
import { HeartIcon, MessageCircleIcon } from '@/components/Icon';
import StarRatingTooltip from './StarRatingTooltip';
import { useCommentDrawer } from '@/store/slice/drawer/useDrawerController';

export default function PostFooter() {
  const { commentDrawerToggleHandler } = useCommentDrawer();

  return (
    <CardFooter className={classes.cardFooter}>
      <div className={classes.iconContainer}>
        <div>
          <StarRatingTooltip />
        </div>
        <div>
          <Button
            size="icon"
            variant="ghost"
            onClick={commentDrawerToggleHandler}
          >
            <MessageCircleIcon className={classes.iconButton} />
          </Button>
          <Button size="icon" variant="ghost">
            <HeartIcon className={classes.iconButton} />
          </Button>
        </div>
      </div>
      <div className={classes.contents}>
        컨텐츠 영역 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Velit reiciendis ad officiis beatae est libero quam placeat animi soluta
        deleniti alias dignissimos voluptas laborum, eum dolorem veniam
        inventore rerum ipsa.
      </div>
    </CardFooter>
  );
}
