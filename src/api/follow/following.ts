import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

interface IFollowingBody {
  following_account: string;
}

const following = async (body: IFollowingBody) => {
  const { data } = await axiosInstance.post(API_URL.FOLLOW.FOLLOWING, body);
  return data;
};

const useFollowing = () => useMutation({ mutationFn: following });

export default useFollowing;
