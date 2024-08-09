import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';
import { ICreatePlaceBody } from '@/api/place/createPlace';

interface PlacePickCategoryDto {
  id: number;
}

interface PlacePickDto {
  memo: string;
  alias: string;
  link: string;
}

interface ICreatePlacePickRequestBody {
  plPickCategory: PlacePickCategoryDto;
  place: ICreatePlaceBody;
  placePick: PlacePickDto;
}

const createPlacePick = async (body: ICreatePlacePickRequestBody) => {
  const { data } = await axiosInstance.post(
    API_URL.PLACE_PICK.CREATE_PLACE_PICK,
    body
  );
  return data;
};

const useCreatePlacePick = () => useMutation({ mutationFn: createPlacePick });

export default useCreatePlacePick;
