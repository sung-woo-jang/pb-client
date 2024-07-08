import * as React from 'react';
import classes from './styles.module.scss';
import StarRatingTooltip from './StarRatingTooltip';
import { useCommentDrawer } from '@/store/slice/drawer/useDrawerController';
import HeartIcon from '@/components/Icon/HeartIcon';
import MessageCircleIcon from '@/components/Icon/MessageCircleIcon';

export default function PostFooter() {
  const { commentDrawerToggleHandler } = useCommentDrawer();

  return (
    <div className={classes.cardFooter}>
      <div className={classes.iconContainer}>
        <div>
          <StarRatingTooltip />
        </div>
        <div>
          <button
            className={`${classes.button} ${classes.icon} ${classes.ghost}`}
            onClick={commentDrawerToggleHandler}
          >
            <MessageCircleIcon className={classes.iconButton} />
          </button>
          <button
            className={`${classes.button} ${classes.icon} ${classes.ghost}`}
          >
            <HeartIcon className={classes.iconButton} />
          </button>
        </div>
      </div>
      <div className={classes.contents}>
        컨텐츠 영역 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Velit reiciendis ad officiis beatae est libero quam placeat animi soluta
        deleniti alias dignissimos voluptas laborum, eum dolorem veniam
        inventore rerum ipsa.
      </div>
    </div>
  );
}
