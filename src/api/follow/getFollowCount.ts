import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

const getFollowCount = async () => {
  const { data } = await axiosInstance.get(API_URL.FOLLOW.GET_FOLLOW_COUNT);
  return data;
};

const useGetFollowCount = () =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.FOLLOW.GET_FOLLOW_COUNT),
    queryFn: getFollowCount,
  });

export default useGetFollowCount;
