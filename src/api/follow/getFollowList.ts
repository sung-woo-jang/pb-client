import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse } from '@/types/apiTypes';

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

const getFollowList = async () => {
  const { data } = await axiosInstance.get<
    CommonResponse<IFollowListResponseData>
  >(API_URL.FOLLOW.GET_FOLLOW_LIST);
  return data;
};

const useGetFollowList = () =>
  useQuery<CommonResponse<IFollowListResponseData>>({
    queryKey: generateQueryKeysFromUrl(API_URL.FOLLOW.GET_FOLLOW_LIST),
    queryFn: getFollowList,
  });

export default useGetFollowList;
