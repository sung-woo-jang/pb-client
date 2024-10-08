import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';
import { CommonResponse } from '@/types/apiTypes';
import isUndefined from 'lodash/isUndefined';

interface IImage {
  id: number;
  image_path: string;
}

export interface IPost {
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
  useQuery<
    CommonResponse<IGetTimelineListResponseData>,
    unknown,
    IGetTimelineListResponseData
  >({
    queryKey: generateQueryKeysFromUrl(
      API_URL.TIMELINE.GET_TIMELINE_LIST(userId)
    ),
    queryFn: () => getTimelineList(userId),
    enabled: !isUndefined(userId),
    select: (data) => data.data,
  });

export default useGetTimelineList;
