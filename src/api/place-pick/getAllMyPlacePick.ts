import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/constants/API_URL';
import { axiosInstance } from '@/api/axiosInstance';
import { CommonResponse } from '@/types/apiTypes';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { CircleColors } from '@/constants/COLORS';

export interface IGetAllMyPlacePickResponseData {
  place_id: number;
  place: {
    mapx: number;
    mapy: number;
  };
  plPickCategory: {
    picker_color: CircleColors;
  };
}

interface IAllMyPlacePickTData {
  placeIds: Set<number>;
  placeDetails: [
    number,
    { coords: [number, number]; pickerColor: CircleColors },
  ][];
}

export const getAllMyPlacePick = async () => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetAllMyPlacePickResponseData[]>
  >(API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK);

  return data;
};

export const selectAllMyPlacePick = (
  data: CommonResponse<IGetAllMyPlacePickResponseData[]>
): IAllMyPlacePickTData => {
  const placeIds = new Set<number>();
  const placeDetailsMap = new Map<
    number,
    { coords: [number, number]; pickerColor: CircleColors }
  >();

  data.data.forEach(({ place_id, place: { mapx, mapy }, plPickCategory }) => {
    placeIds.add(place_id);
    placeDetailsMap.set(place_id, {
      coords: [mapy, mapx],
      pickerColor: plPickCategory.picker_color,
    });
  });

  return {
    placeIds,
    placeDetails: Array.from(placeDetailsMap.entries()),
  };
};

const useGetAllMyPlacePick = () =>
  useQuery<
    CommonResponse<IGetAllMyPlacePickResponseData[]>,
    unknown,
    IAllMyPlacePickTData
  >({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK
    ),
    queryFn: getAllMyPlacePick,
    select: selectAllMyPlacePick,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24, // 24시간
  });

export default useGetAllMyPlacePick;
