import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

const getMyInfo = async () => {
  const { data } = await axiosInstance.get(API_URL.AUTH.GET_MY_INFO);
  return data;
};

const useGetMyInfo = () =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.AUTH.GET_MY_INFO),
    queryFn: getMyInfo,
  });

export default useGetMyInfo;
