import { NumberString } from '@/types/commonTypes';
import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

const deleteComment = async (commentId: NumberString) => {
  const { data } = await axiosInstance.delete(
    API_URL.COMMENT.DELETE_COMMENT(commentId)
  );
  return data;
};

const useDeleteComment = () =>
  useMutation({
    mutationFn: deleteComment,
  });

export default useDeleteComment;
