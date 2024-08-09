import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';

const findOneWithDeleted = async (id: NumberString) => {
  const { data } = await axiosInstance.get(
    API_URL.PL_PICK_CATEGORY.FIND_ONE_WITH_DELETED(id)
  );
  return data;
};

const useFindOneWithDeleted = (id: NumberString) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PL_PICK_CATEGORY.FIND_ONE_WITH_DELETED(id)
    ),
    queryFn: () => findOneWithDeleted(id),
  });

export default useFindOneWithDeleted;
