import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';

const getCategoryWithPlacePicks = async (id: NumberString) => {
  const { data } = await axiosInstance.get(
    API_URL.PL_PICK_CATEGORY.GET_CATEGORY_WITH_PLACE_PICKS(id)
  );
  return data;
};

const useGetCategoryWithPlacePicks = (id: NumberString) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PL_PICK_CATEGORY.GET_CATEGORY_WITH_PLACE_PICKS(id)
    ),
    queryFn: () => getCategoryWithPlacePicks(id),
  });

export default useGetCategoryWithPlacePicks;
