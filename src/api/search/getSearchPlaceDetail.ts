import { axiosInstance } from '@/api/axiosInstance';
import { CommonResponse } from '@/types/apiTypes';
import { API_URL } from '@/constants/API_URL';
import { NumberString } from '@/types/commonTypes';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

export interface ISearchPlaceDetailImages {
  id: number;
  image_path: string;
}

interface IKeywords {
  id: number;
  keyword: string;
}

interface IUser {
  id: 'dfff79bf-111a-4b93-b4fc-a30ccfb40184';
  nickname: '3de3fr3hn3d73fx3i46';
  profileImage: '124655.png';
}

export interface IPost {
  id: number;
  content: string;
  visitDate: Date;
  rate: number;
  user: IUser;
  keywords: IKeywords[];
  images: ISearchPlaceDetailImages[];
}

export interface IGetSearchPlaceResult {
  id: number;
  title: string;
  address: string;
  road_address: string;
  total_posts: number;
  place_average_rate: number;
}

export interface IGetSearchPlaceDetail extends IGetSearchPlaceResult {
  post: IPost[];
}

const getSearchPlaceDetail = async (placeId: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetSearchPlaceDetail>
  >(API_URL.SEARCH.GET_SEARCH_PLACE_DETAIL(placeId));

  return data;
};

const useSearchPlaceDetail = (placeId: NumberString) =>
  useQuery<CommonResponse<IGetSearchPlaceDetail>>({
    queryKey: generateQueryKeysFromUrl(
      API_URL.SEARCH.GET_SEARCH_PLACE_DETAIL(placeId)
    ),
    queryFn: () => getSearchPlaceDetail(placeId),
  });

export default useSearchPlaceDetail;
