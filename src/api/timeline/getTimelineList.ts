import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';

const getTimelineList = async (userId: NumberString) => {
  const { data } = await axiosInstance.get(
    API_URL.TIMELINE.GET_TIMELINE_LIST(userId)
  );
  return data;
};

const useGetTimelineList = (userId: NumberString) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(
      API_URL.TIMELINE.GET_TIMELINE_LIST(userId)
    ),
    queryFn: () => getTimelineList(userId),
  });

export default useGetTimelineList;
