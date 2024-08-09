import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

export interface ICreatePlaceCategoryRequestBody {
  category: string;
}

const createPlaceCategory = async (body: ICreatePlaceCategoryRequestBody) => {
  const { data } = await axiosInstance.post(
    API_URL.PLACE.CREATE_PLACE_CATEGORY,
    body
  );
  return data;
};

const useCreatePlaceCategory = () =>
  useMutation({ mutationFn: createPlaceCategory });

export default useCreatePlaceCategory;
