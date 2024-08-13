import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';
import { CircleColors } from '@/constants/COLORS';
import { CommonResponse } from '@/types/apiTypes';

interface IPlacePick {
  pl_pick_category_id: number;
  place_id: number;
  memo: string;
  alias: string;
  link: string;
  createdAt: Date;
}

interface IGetCategoryWithPlacePicksResponseData {
  title: string;
  picker_color: CircleColors;
  memo: string;
  link: string;
  id: 1;
  createdAt: Date;
  placePicks: IPlacePick[];
}

const getCategoryWithPlacePicks = async (id: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetCategoryWithPlacePicksResponseData>
  >(API_URL.PL_PICK_CATEGORY.GET_CATEGORY_WITH_PLACE_PICKS(id));
  return data;
};

const useGetCategoryWithPlacePicks = (id: NumberString) =>
  useQuery<CommonResponse<IGetCategoryWithPlacePicksResponseData>>({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PL_PICK_CATEGORY.GET_CATEGORY_WITH_PLACE_PICKS(id)
    ),
    queryFn: () => getCategoryWithPlacePicks(id),
  });

export default useGetCategoryWithPlacePicks;
