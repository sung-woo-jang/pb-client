import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

interface ICreatePlacePickRequestBody {
  place_id: number;
  link: string;
  memo: string;
  alias: string;
  pl_pick_category_ids: number[];
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
