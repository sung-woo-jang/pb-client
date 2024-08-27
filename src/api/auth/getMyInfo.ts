import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse } from '@/types/apiTypes';

interface IMyInfo {
  email: string;
  name: string;
  nickname: string;
  profileImage: string;
  id: string;
}

const getMyInfo = async () => {
  const { data } = await axiosInstance.get<CommonResponse<IMyInfo>>(
    API_URL.AUTH.GET_MY_INFO
  );
  return data;
};

const useGetMyInfo = () =>
  useQuery<CommonResponse<IMyInfo>, unknown, IMyInfo>({
    queryKey: generateQueryKeysFromUrl(API_URL.AUTH.GET_MY_INFO),
    queryFn: getMyInfo,
    select: (data) => data.data,
  });

export default useGetMyInfo;
