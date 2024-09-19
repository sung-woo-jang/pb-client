import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';
import { CommonResponse } from '@/types/apiTypes';
import gt from 'lodash/gt';

export interface IPlaceCategory {
  place_category_name: string;
  place_category_name_detail: string;
  id: number;
  createdAt: Date;
}

interface IPlace {
  title: string;
  address: string;
  road_address: string;
  description: string;
  telephone: string;
  mapx: number;
  mapy: number;
  placeCategory: IPlaceCategory;
}

interface IPlPickCategory {
  title: string;
  memo: string;
  id: number;
}

interface IFindPlacePickListResponseData {
  place_id: number;
  memo: string;
  alias: string;
  link: string;
  createdAt: Date;
  place: IPlace;
  plPickCategory: IPlPickCategory;
}

const findPlacePickList = async (id: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IFindPlacePickListResponseData[]>
  >(API_URL.PLACE_PICK.FIND_PLACE_PICK_LIST(id));
  return data;
};

const useFindPlacePickList = (id: NumberString) =>
  useQuery<
    CommonResponse<IFindPlacePickListResponseData[]>,
    unknown,
    IFindPlacePickListResponseData[]
  >({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PLACE_PICK.FIND_PLACE_PICK_LIST(id)
    ),
    queryFn: () => findPlacePickList(id),
    enabled: gt(id, 0),
    select: (data) => data.data,
  });

export default useFindPlacePickList;
