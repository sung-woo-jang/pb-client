import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse } from '@/types/apiTypes';
import * as _ from 'lodash';
import { NumberString } from '@/types/commonTypes';

enum FollowStatus {
  FOLLOW = '팔로우',
  BLOCKED = '차단',
}

interface IFollow {
  follower_account: string;
  following_account: string;
  status: FollowStatus;
  createdAt: Date;
}

interface IFollowListResponseData {
  followings: IFollow[];
  followers: IFollow[];
}

const getFollowListByUserId = async (userId: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IFollowListResponseData>
  >(API_URL.FOLLOW.GET_FOLLOW_LIST_BY_USER_ID(userId));
  return data;
};

const useGetFollowListByUserId = (userId: NumberString) =>
  useQuery<CommonResponse<IFollowListResponseData>>({
    queryKey: generateQueryKeysFromUrl(
      API_URL.FOLLOW.GET_FOLLOW_LIST_BY_USER_ID(userId)
    ),
    queryFn: () => getFollowListByUserId(userId),
    enabled: !_.isUndefined(userId),
  });

export default useGetFollowListByUserId;
