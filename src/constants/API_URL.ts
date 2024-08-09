/* ******** GET ******** */
/* ******** POST ******** */
/* ******** Updata ******** */
/* ******** Delete ******** */
import { NumberString } from '@/types/commonTypes';

export const API_URL = {
  BASE_URL: process.env.BASE_URL,
  AUTH: {
    /**
     * @description 사용자 정보 가져오기
     */
    GET_MY_INFO: 'auth/my-info',
    /**
     * @description 로그아웃
     */
    LOGOUT: `auth/logout`,
  },
  COMMENT: {
    CREATE_COMMENT: 'comment',
  },
  POST: {
    CREATE_POST: `post`,
  },
  PLACE: {
    CREATE_PLACE: 'place',
    CREATE_PLACE_CATEGORY: 'place/category',
  },
  PL_PICK_CATEGORY: {
    CREATE_PL_PICK_CATEGORY: 'pl-pick-category',
    FIND_USER_CATEGORIES: 'pl-pick-category',
    GET_CATEGORY_WITH_PLACE_PICKS: (id: NumberString) =>
      `pl-pick-category/${id}`,
    DELETE_OR_RESTORE_CATEGORY: (id: NumberString) => `pl-pick-category/${id}`,
    FIND_ONE_WITH_DELETED: (id: NumberString) =>
      `pl-pick-category/${id}/with-deleted`,
  },
  PLACE_PICK: {
    CREATE_PLACE_PICK: 'place-pick',
    FIND_PLACE_PICK_LIST: (id: NumberString) => `place-pick/${id}`,
  },
  TIMELINE: {
    GET_TIMELINE_LIST: (userId: NumberString) => `timeline/${userId}`,
  },
  FOLLOW: {
    FOLLOWING: 'follow',
    GET_FOLLOW_LIST: 'follow',
    GET_FOLLOW_COUNT: 'follow/count',
  },
  LIKE: {
    TOGGLE_LIKE_POST: 'like',
    GET_LIKES_FOR_POST: (postId: NumberString) => `like/post/${postId}`,
    GET_LIKES_FOR_USER: (userId: NumberString) => `like/user/${userId}`,
  },
  NEWSFEED: {
    GET_NEWS_FEEDS: 'newsfeed',
  },
} as const;
