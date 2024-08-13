import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse } from '@/types/apiTypes';

interface IGetLikesForUser {
  likeCount: number;
}

// 게시글 좋아요 개수 조회
const getLikesForUser = async (userId: string) => {
  const { data } = await axiosInstance.get<CommonResponse<IGetLikesForUser>>(
    API_URL.LIKE.GET_LIKES_FOR_USER(userId)
  );
  return data;
};

const useGetLikesForUser = (userId: string) =>
  useQuery<CommonResponse<IGetLikesForUser>>({
    queryKey: generateQueryKeysFromUrl(API_URL.LIKE.GET_LIKES_FOR_USER(userId)),
    queryFn: () => getLikesForUser(userId),
  });

export default useGetLikesForUser;
