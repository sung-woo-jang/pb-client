import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';
import { CommonResponse } from '@/types/apiTypes';

interface IImage {
  id: number;
  image_path: string;
}

interface IPost {
  id: number;
  images: IImage[];
}

interface IGetTimelineListResponseData {
  email: string;
  name: string;
  nickname: string;
  profileImage: string;
  id: string;
  posts: IPost[];
}

const getTimelineList = async (userId: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetTimelineListResponseData>
  >(API_URL.TIMELINE.GET_TIMELINE_LIST(userId));
  return data;
};

const useGetTimelineList = (userId: NumberString) =>
  useQuery<CommonResponse<IGetTimelineListResponseData>>({
    queryKey: generateQueryKeysFromUrl(
      API_URL.TIMELINE.GET_TIMELINE_LIST(userId)
    ),
    queryFn: () => getTimelineList(userId),
  });

export default useGetTimelineList;
