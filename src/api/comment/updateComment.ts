import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

interface IUpdateCommentBody {
  id: number;
  comment: string;
}

const updateComment = async (body: IUpdateCommentBody) => {
  const { data } = await axiosInstance.patch(
    API_URL.COMMENT.UPDATE_COMMENT,
    body
  );
  return data;
};

const useUpdateComment = () => {
  return useMutation({
    mutationFn: updateComment,
  });
};

export default useUpdateComment;
