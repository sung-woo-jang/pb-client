import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';

const findPlacePickList = async (id: NumberString) => {
  const { data } = await axiosInstance.get(
    API_URL.PLACE_PICK.FIND_PLACE_PICK_LIST(id)
  );
  return data;
};

const useFindPlacePickList = (id: NumberString) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(
      API_URL.PLACE_PICK.FIND_PLACE_PICK_LIST(id)
    ),
    queryFn: () => findPlacePickList(id),
  });

export default useFindPlacePickList;
