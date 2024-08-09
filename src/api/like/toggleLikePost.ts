import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

interface IToggleLikePostBody {
  post_id: number;
}

const toggleLikePost = async (body: IToggleLikePostBody) => {
  const { data } = await axiosInstance.post(
    API_URL.LIKE.TOGGLE_LIKE_POST,
    body
  );
  return data;
};

const useToggleLikePost = () => useMutation({ mutationFn: toggleLikePost });

export default useToggleLikePost;
