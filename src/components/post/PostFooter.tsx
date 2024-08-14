import * as React from 'react';
import classes from './styles.module.scss';
import StarRatingTooltip from './StarRatingTooltip';
import { useCommentDrawer } from '@/store/slice/drawer/useDrawerController';
import HeartIcon from '@/components/Icon/HeartIcon';
import { FiMessageCircle } from 'react-icons/fi';

interface IPostFooterProps {
  postId: number;
  rate: number;
  content: string;
}

export default function PostFooter({
  rate,
  content,
  postId,
}: IPostFooterProps) {
  const { commentDrawerToggleHandler, setPostIdHandler } = useCommentDrawer();

  const commentButtonClickHandler = () => {
    setPostIdHandler(postId);
    commentDrawerToggleHandler();
  };

  return (
    <div className={classes.cardFooter}>
      <div className={classes.iconContainer}>
        <div>
          <StarRatingTooltip rate={rate} />
        </div>
        <div>
          <button
            className={`${classes.button} ${classes.icon} ${classes.ghost}`}
            onClick={commentButtonClickHandler}
          >
            {/*TODO: 게시글 id로 관련 댓글 api 호출 후 open 되도록*/}
            <FiMessageCircle className={classes.iconButton} />
          </button>
          <button
            className={`${classes.button} ${classes.icon} ${classes.ghost}`}
          >
            <HeartIcon className={classes.iconButton} />
          </button>
        </div>
      </div>
      <div className={classes.contents}>{content}</div>
    </div>
  );
}
