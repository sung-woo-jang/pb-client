import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/constants/API_URL';
import { axiosInstance } from '@/api/axiosInstance';
import { CommonResponse } from '@/types/apiTypes';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

interface IGetAllMyPlacePickResponseData {
  coords: [number, number][];
}

export const getAllMyPlacePick = async () => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetAllMyPlacePickResponseData>
  >(API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK);

  return data;
};

const useGetAllMyPlacePick = () =>
  useQuery<
    CommonResponse<IGetAllMyPlacePickResponseData>,
    unknown,
    IGetAllMyPlacePickResponseData
  >({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK
    ),
    queryFn: getAllMyPlacePick,
    select: (data) => data.data,
  });

export default useGetAllMyPlacePick;
