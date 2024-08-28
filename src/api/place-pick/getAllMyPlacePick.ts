import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/constants/API_URL';
import { axiosInstance } from '@/api/axiosInstance';
import { CommonResponse } from '@/types/apiTypes';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

export interface IGetAllMyPlacePickResponseData {
  place_id: number;
  place: {
    mapx: number;
    mapy: number;
  };
}

interface IAllMyPlacePickTData {
  place_id: Set<number>;
  coords: [number, number][];
}

export const getAllMyPlacePick = async () => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetAllMyPlacePickResponseData[]>
  >(API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK);

  return data;
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
    select: (data) =>
      data.data.reduce<IAllMyPlacePickTData>(
        (acc, { place_id, place: { mapx, mapy } }) => {
          acc.place_id.add(place_id);
          acc.coords.push([mapy, mapx]);
          return acc;
        },
        { place_id: new Set(), coords: [] }
      ),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24, // 1시간
  });

export default useGetAllMyPlacePick;
