import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CommonResponse } from '@/types/apiTypes';
import { IUser } from '@/types/userTypes';
import { IPlaceCategory } from '@/api/place-pick/findPlacePickList';

interface IKeyword {
  id: number;
  keyword: string;
}

export interface IPlace {
  title: string;
  address: string;
  road_address: string;
  description: string;
  telephone: string;
  mapx: number;
  mapy: number;
  placeCategory: IPlaceCategory;
}

export interface IImage {
  id: number;
  createdAt: Date;
  image_path: string;
}

export interface IGetNewsfeedApiResponseData {
  id: number;
  visitDate: Date;
  createdAt: Date;
  content: string;
  rate: number;
  user: IUser;
  keywords: IKeyword[];
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
