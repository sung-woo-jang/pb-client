import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { CircleColors } from '@/constants/COLORS';
import { CommonResponse } from '@/types/apiTypes';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

interface IFindUserCategoriesResponseData {
  title: string;
  picker_color: CircleColors;
  memo: string;
  link: string;
  id: number;
  createdAt: Date;
}

const findUserCategories = async () => {
  const { data } = await axiosInstance.get<
    CommonResponse<IFindUserCategoriesResponseData[]>
  >(API_URL.PL_PICK_CATEGORY.FIND_USER_CATEGORIES);
  return data;
};

const useFindUserCategories = () =>
  useQuery<
    CommonResponse<IFindUserCategoriesResponseData[]>,
    unknown,
    IFindUserCategoriesResponseData[]
  >({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PL_PICK_CATEGORY.FIND_USER_CATEGORIES
    ),
    queryFn: findUserCategories,
    select: (data) => data.data,
  });

export default useFindUserCategories;
