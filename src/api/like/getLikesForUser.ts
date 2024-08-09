import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

const getLikesForUser = async (userId: string) => {
  const { data } = await axiosInstance.get(
    API_URL.LIKE.GET_LIKES_FOR_USER(userId)
  );
  return data;
};

const useGetLikesForUser = (userId: string) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.LIKE.GET_LIKES_FOR_USER(userId)),
    queryFn: () => getLikesForUser(userId),
  });

export default useGetLikesForUser;
