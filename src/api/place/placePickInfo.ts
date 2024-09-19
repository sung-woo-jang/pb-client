import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';
import { CommonResponse } from '@/types/apiTypes';

interface IPlaceInfoBody {
  mapx: number;
  mapy: number;
}

interface PlaceCategory {
  place_category_name: string;
  place_category_name_detail: string;
}

interface PlaceInfoResponseData {
  title: string;
  address: string;
  road_address: string;
  description: string;
  telephone: string;
  placeCategory: PlaceCategory;
  id: number;
}

const placeInfo = async (body: IPlaceInfoBody) => {
  const { data } = await axiosInstance.post<
    CommonResponse<PlaceInfoResponseData>
  >(API_URL.PLACE.INFO, body);
  return data;
};

// TODO: redux로 변경 고려
const usePlaceInfo = () =>
  useMutation({
    mutationFn: placeInfo,
  });

export default usePlaceInfo;
