import { NumberString } from '@/types/commonTypes';
import { ISearchPlacesQuery } from '@/api/search/searchPlaces';

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
  CODE: {
    GET_ALL_CODES: 'code',
  },
  COMMENT: {
    GET_COMMENT: (postId: NumberString) => `comment/${postId}`,
    CREATE_COMMENT: 'comment',
    UPDATE_COMMENT: 'comment',
    DELETE_COMMENT: (commentId: NumberString) => `comment/${commentId}`,
  },
  POST: {
    GET_POST_DETAIL: (postId: NumberString) => `post/${postId}`,
    CREATE_POST: `post`,
  },
  SEARCH: {
    GET_SEARCH_PLACE_DETAIL: (placeId: NumberString) => `search/${placeId}`,

    GET_SEARCH_PLACE: (query: ISearchPlacesQuery) => {
      const baseUrl = 'search';
      const queryParams = new URLSearchParams();

      queryParams.append('keyword', encodeURIComponent(query.keyword));

      if (query.offset !== undefined) {
        queryParams.append('offset', query.offset.toString());
      }

      if (query.limit !== undefined) {
        queryParams.append('limit', query.limit.toString());
      }

      if (query.mapx !== undefined) {
        queryParams.append('mapx', query.mapx.toString());
      }

      if (query.mapy !== undefined) {
        queryParams.append('mapy', query.mapy.toString());
      }

      return `${baseUrl}?${queryParams.toString()}`;
    },
  },
  PLACE: {
    CREATE_PLACE: 'place',
    INFO: 'place/info',
    SEARCH_PLACE: 'place/search',
    CREATE_PLACE_CATEGORY: 'place/category',
    GET_PLACE_INFO_BY_ID: (id: NumberString) => `place/${id}`,
  },
  PL_PICK_CATEGORY: {
    CREATE_PL_PICK_CATEGORY: 'pl-pick-category',
    FIND_USER_CATEGORIES: 'pl-pick-category',
    FIND_USER_CATEGORIES_BY_USER_ID: (userId: NumberString) =>
      `pl-pick-category/user/${userId}`,
    GET_CATEGORY_WITH_PLACE_PICKS: (id: NumberString) =>
      `pl-pick-category/${id}`,
    DELETE_OR_RESTORE_CATEGORY: (id: NumberString) => `pl-pick-category/${id}`,
  },
  PLACE_PICK: {
    CREATE_PLACE_PICK: 'place-pick',
    GET_ALL_MY_PLACE_PICK: 'place-pick',
    FIND_PLACE_PICK_LIST: (id: NumberString) => `place-pick/${id}`,
    DELETE_PLACE_PICK: `place-pick/delete-place-pick`,
  },
  TIMELINE: {
    GET_TIMELINE_LIST: (userId: NumberString) => `timeline/${userId}`,
  },
  FOLLOW: {
    FOLLOWING: 'follow',
    GET_FOLLOW_LIST: 'follow',
    GET_FOLLOW_COUNT: 'follow/count',
    GET_FOLLOW_LIST_BY_USER_ID: (userId: NumberString) => `follow/${userId}`,
    GET_FOLLOW_COUNT_BY_USER_ID: (userId: NumberString) =>
      `follow/count/${userId}`,
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
