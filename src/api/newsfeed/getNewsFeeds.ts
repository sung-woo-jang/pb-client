import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse, IBaseApiResponse } from '@/types/apiTypes';
import { IUser } from '@/types/userTypes';

interface IKeyword {
  id: number;
  keyword: string;
}

interface IComment extends IBaseApiResponse {
  comment: string;
}

interface IPlace extends IBaseApiResponse {
  title: string;
  address: string;
  road_address: string;
  description: string;
  telephone: string;
  mapx: number;
  mapy: number;
}

interface IImage extends IBaseApiResponse {
  image_path: string;
}

interface ILike {
  user_id: string;
  post_id: number;
  createdAt: Date;
}

interface IGetNewsfeedApiResponseData {
  content: string;
  rate: number;
  user: IUser;
  likes: ILike[];
  keywords: IKeyword[];
  comments: IComment[];
  place: IPlace;
  images: IImage[];
}

const getNewsFeeds = async () => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetNewsfeedApiResponseData[]>
  >(API_URL.NEWSFEED.GET_NEWS_FEEDS);

  return data;
};

const useGetNewsFeeds = () =>
  useQuery<CommonResponse<IGetNewsfeedApiResponseData[]>>({
    queryKey: generateQueryKeysFromUrl(API_URL.NEWSFEED.GET_NEWS_FEEDS),
    queryFn: getNewsFeeds,
  });

export default useGetNewsFeeds;
