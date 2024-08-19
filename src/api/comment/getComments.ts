import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { NumberString } from '@/types/commonTypes';
import { CommonResponse } from '@/types/apiTypes';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

interface IUser {
  id: string;
  name: string;
  nickname: string;
  profileImage: string;
}

interface IGetCommentsResponseData {
  id: number;
  comment: string;
  createdAt: Date;
  user: IUser;
}

const getComments = async (postId: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetCommentsResponseData[]>
  >(API_URL.COMMENT.GET_COMMENT(postId));
  return data;
};

const useGetComments = (postId: NumberString, commentDrawerState: boolean) =>
  useQuery<CommonResponse<IGetCommentsResponseData[]>>({
    queryKey: generateQueryKeysFromUrl(API_URL.COMMENT.GET_COMMENT(postId)),
    queryFn: () => getComments(postId),
    enabled: commentDrawerState,
  });

export default useGetComments;
