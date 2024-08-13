import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse } from '@/types/apiTypes';

interface IFollowCountResponseData {
  followings: number;
  followers: number;
}

const getFollowCount = async () => {
  const { data } = await axiosInstance.get<
    CommonResponse<IFollowCountResponseData>
  >(API_URL.FOLLOW.GET_FOLLOW_COUNT);
  return data;
};

const useGetFollowCount = () =>
  useQuery<CommonResponse<IFollowCountResponseData>>({
    queryKey: generateQueryKeysFromUrl(API_URL.FOLLOW.GET_FOLLOW_COUNT),
    queryFn: getFollowCount,
  });

export default useGetFollowCount;
