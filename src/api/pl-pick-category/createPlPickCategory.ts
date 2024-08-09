import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';
import { CircleColors } from '@/constants/COLORS';

interface ICreatePlPickCategoryBody {
  title: string;
  picker_color: CircleColors;
  memo: string;
  link: string;
}

const createPlPickCategory = async (body: ICreatePlPickCategoryBody) => {
  const { data } = await axiosInstance.post(
    API_URL.PL_PICK_CATEGORY.CREATE_PL_PICK_CATEGORY,
    body
  );
  return data;
};

const useCreatePlPickCategory = () =>
  useMutation({ mutationFn: createPlPickCategory });

export default useCreatePlPickCategory;
