import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

const getFollowList = async () => {
  const { data } = await axiosInstance.get(API_URL.FOLLOW.GET_FOLLOW_LIST);
  return data;
};

const useGetFollowList = () =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.FOLLOW.GET_FOLLOW_LIST),
    queryFn: getFollowList,
  });

export default useGetFollowList;
