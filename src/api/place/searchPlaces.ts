import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { CommonResponse } from '@/types/apiTypes';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

export interface ISearchPlacesQuery {
  keyword: string;
  offset?: number;
  limit?: number;
  mapx?: number;
  mapy?: number;
}

interface IPlaceCategory {
  place_category_name: string;
  place_category_name_detail: string;
}

export interface ISearchPlacesResponseData {
  title: string;
  address: string;
  road_address: string;
  description: string;
  telephone: string;
  mapx: number;
  mapy: number;
  id: number;
  createdAt: Date;
  placeCategory: IPlaceCategory;
  similarity: number;
  distance: number | null;
  placePickCount: number;
}

const searchPlace = async (query: ISearchPlacesQuery) => {
  const { data } = await axiosInstance.get<
    CommonResponse<ISearchPlacesResponseData[]>
  >(API_URL.SEARCH.GET_SEARCH_PLACE(query));

  return data;
};

const useSearchPlaces = (query: ISearchPlacesQuery) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.SEARCH.GET_SEARCH_PLACE(query)),
    queryFn: () => searchPlace(query),
    enabled: query.keyword.length > 0,
  });

export default useSearchPlaces;
