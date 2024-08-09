import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

const getNewsFeeds = async () => {
  const { data } = await axiosInstance.get(API_URL.NEWSFEED.GET_NEWS_FEEDS);
  return data;
};

const useGetNewsFeeds = () =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.AUTH.GET_MY_INFO),
    queryFn: getNewsFeeds,
  });

export default useGetNewsFeeds;
