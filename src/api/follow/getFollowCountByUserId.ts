import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse } from '@/types/apiTypes';
import { NumberString } from '@/types/commonTypes';
import _ from 'lodash';

interface IFollowCountResponseData {
  followings: number;
  followers: number;
}

const getFollowCountByUserId = async (userId: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IFollowCountResponseData>
  >(API_URL.FOLLOW.GET_FOLLOW_COUNT_BY_USER_ID(userId));
  return data;
};

const useGetFollowCountByUserId = (userId: NumberString) =>
  useQuery<CommonResponse<IFollowCountResponseData>>({
    queryKey: generateQueryKeysFromUrl(
      API_URL.FOLLOW.GET_FOLLOW_COUNT_BY_USER_ID(userId)
    ),
    queryFn: () => getFollowCountByUserId(userId),
    enabled: !_.isUndefined(userId),
  });

export default useGetFollowCountByUserId;
