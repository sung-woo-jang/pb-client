import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

const getLikesForPost = async (postId: number) => {
  const { data } = await axiosInstance.get(
    API_URL.LIKE.GET_LIKES_FOR_POST(postId)
  );
  return data;
};

const useGetLikesForPost = (postId: number) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.LIKE.GET_LIKES_FOR_POST(postId)),
    queryFn: () => getLikesForPost(postId),
  });

export default useGetLikesForPost;
