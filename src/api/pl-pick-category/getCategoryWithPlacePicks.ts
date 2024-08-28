import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';
import { CircleColors } from '@/constants/COLORS';
import { CommonResponse } from '@/types/apiTypes';
import gt from 'lodash/gt';

interface IPlaceCategory {
  id: number;
  place_category_name: string;
  place_category_name_detail: string;
}

interface IPlace {
  title: string;
  address: string;
  road_address: string;
  placeCategory: IPlaceCategory;
}

interface IPlacePick {
  createdAt: Date;
  pl_pick_category_id: number;
  place_id: number;
  memo: string;
  alias: string;
  link: string;
  place: IPlace;
}

interface IGetCategoryWithPlacePicksResponseData {
  title: string;
  picker_color: CircleColors;
  memo: string;
  link: string;
  id: number;
  createdAt: Date;
  placePicks: IPlacePick[];
}

const getCategoryWithPlacePicks = async (id: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetCategoryWithPlacePicksResponseData>
  >(API_URL.PL_PICK_CATEGORY.GET_CATEGORY_WITH_PLACE_PICKS(id));
  return data;
};

const useGetCategoryWithPlacePicks = (id: NumberString, drawerState: boolean) =>
  useQuery<CommonResponse<IGetCategoryWithPlacePicksResponseData>>({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PL_PICK_CATEGORY.GET_CATEGORY_WITH_PLACE_PICKS(id)
    ),
    queryFn: () => getCategoryWithPlacePicks(id),
    enabled: gt(id, 0) && drawerState,
  });

export default useGetCategoryWithPlacePicks;
