import { axiosInstance } from '@/api/axiosInstance';
import { CommonResponse } from '@/types/apiTypes';
import { API_URL } from '@/constants/API_URL';
import { NumberString } from '@/types/commonTypes';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

interface GetPlaceInfoByIdResponseData {
  title: string;
  id: number;
}

const getPlaceInfoById = async (id: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<GetPlaceInfoByIdResponseData>
  >(API_URL.PLACE.GET_PLACE_INFO_BY_ID(id));
  return data;
};

const useGetPlaceInfoById = (id: NumberString) =>
  useQuery<
    CommonResponse<GetPlaceInfoByIdResponseData>,
    unknown,
    GetPlaceInfoByIdResponseData
  >({
    queryKey: generateQueryKeysFromUrl(API_URL.PLACE.GET_PLACE_INFO_BY_ID(id)),
    queryFn: () => getPlaceInfoById(id),
    select: (data) => data.data,
  });

export default useGetPlaceInfoById;
