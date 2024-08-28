import * as React from 'react';
import { useEffect, useState } from 'react';
import classes from './styles.module.scss';
import StarRatingTooltip from './StarRatingTooltip';
import { FiMessageCircle } from 'react-icons/fi';
import useCommentDrawer from '@/store/slice/drawer/commentDrawer/useCommentDrawer';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import useToggleLikePost from '@/api/like/toggleLikePost';
import { useQueryClient } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import useGetMyInfo from '@/api/auth/getMyInfo';
import some from 'lodash/some';

interface IPostFooterProps {
  postId: number;
  rate: number;
  content: string;
  likes: { user_id: string }[];
}

export default function PostFooter({
  rate,
  content,
  postId,
  likes,
}: IPostFooterProps) {
  const { data: myInfo, isSuccess } = useGetMyInfo();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isSuccess && some(likes, { user_id: myInfo.id }));
  }, [likes, myInfo, isSuccess]);

  const pathname = usePathname();
  const queryClient = useQueryClient();
  const { commentDrawerToggleHandler, setCommentPostIdHandler } =
    useCommentDrawer();
  const { mutateAsync } = useToggleLikePost();
  const commentButtonClickHandler = () => {
    setCommentPostIdHandler(postId);
    commentDrawerToggleHandler();
  };

  const toggleIconHandler = async () => {
    await mutateAsync({ post_id: postId });
    // TODO: 낙관적으로 업데이트 하도록 되어있으니 수정할것
    setIsChecked(!isChecked);

    if (pathname === '/newsfeed') {
      await queryClient.refetchQueries({
        queryKey: generateQueryKeysFromUrl(API_URL.NEWSFEED.GET_NEWS_FEEDS),
      });
    }
    if (pathname.includes('timeline')) {
      await queryClient.refetchQueries({
        queryKey: generateQueryKeysFromUrl(
          API_URL.POST.GET_POST_DETAIL(postId)
        ),
      });
    }
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
            onClick={toggleIconHandler}
            className={`${classes.button} ${classes.icon} ${classes.ghost}`}
          >
            {isChecked ? (
              <FaHeart
                className={classes.iconButton}
                style={{
                  color: '#F67576',
                }}
              />
            ) : (
              <FaRegHeart
                className={classes.iconButton}
                style={{
                  color: '#F67576',
                }}
              />
            )}
          </button>
        </div>
      </div>
      <div className={classes.contents}>{content}</div>
    </div>
  );
}
