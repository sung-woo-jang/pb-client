import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';

interface IDeletePlacePickBody {
  pl_pick_category_id: number;
  place_id: number;
}

const deletePlacePick = async (body: IDeletePlacePickBody) => {
  const { data } = await axiosInstance.post(
    API_URL.PLACE_PICK.DELETE_PLACE_PICK,
    body
  );
  return data;
};

const useDeletePlacePick = () => useMutation({ mutationFn: deletePlacePick });

export default useDeletePlacePick;
