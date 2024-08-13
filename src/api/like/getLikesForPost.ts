import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse } from '@/types/apiTypes';

interface IGetLikesForPostResponseData {
  createdAt: Date;
  user_id: string;
  post_id: number;
}

// 게시글 좋아요 개수
const getLikesForPost = async (postId: number) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetLikesForPostResponseData[]>
  >(API_URL.LIKE.GET_LIKES_FOR_POST(postId));
  return data;
};

const useGetLikesForPost = (postId: number) =>
  useQuery<CommonResponse<IGetLikesForPostResponseData[]>>({
    queryKey: generateQueryKeysFromUrl(API_URL.LIKE.GET_LIKES_FOR_POST(postId)),
    queryFn: () => getLikesForPost(postId),
  });

export default useGetLikesForPost;
