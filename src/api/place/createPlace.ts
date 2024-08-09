import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

interface ICreatePlaceCategory {
  category: string;
}

export interface ICreatePlaceBody {
  title: string;
  address: string;
  road_address: string;
  description: string;
  telephone: string;
  mapx: number;
  mapy: number;
  placeCategory: ICreatePlaceCategory;
}

const createPlace = async (body: ICreatePlaceBody) => {
  const { data } = await axiosInstance.post(API_URL.PLACE.CREATE_PLACE, body);
  return data;
};

const useCreatePlace = () => useMutation({ mutationFn: createPlace });

export default useCreatePlace;
