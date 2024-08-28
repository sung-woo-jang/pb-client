import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { CircleColors } from '@/constants/COLORS';
import { CommonResponse } from '@/types/apiTypes';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';
import isUndefined from 'lodash/isUndefined';

interface IFindUserCategoriesResponseData {
  title: string;
  picker_color: CircleColors;
  memo: string;
  link: string;
  id: number;
  createdAt: Date;
}

const findCategoriesByUserId = async (userId: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IFindUserCategoriesResponseData[]>
  >(API_URL.PL_PICK_CATEGORY.FIND_USER_CATEGORIES_BY_USER_ID(userId));
  return data;
};

const useFindCategoriesByUserId = (userId: NumberString) =>
  useQuery<CommonResponse<IFindUserCategoriesResponseData[]>>({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PL_PICK_CATEGORY.FIND_USER_CATEGORIES_BY_USER_ID(userId)
    ),
    queryFn: () => findCategoriesByUserId(userId),
    enabled: !isUndefined(userId),
  });

export default useFindCategoriesByUserId;
