import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

interface ICreateCommentBody {
  post_id: number;
  comment: string;
}

const createComment = async (body: ICreateCommentBody) => {
  const { data } = await axiosInstance.post(
    API_URL.COMMENT.CREATE_COMMENT,
    body
  );
  return data;
};

const useCreateComment = () => {
  return useMutation({
    mutationFn: createComment,
  });
};

export default useCreateComment;
