import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { CommonResponse } from '@/types/apiTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface ISearchPlacesBody {
  keyword: string;
  limit?: number;
  mapx?: number;
  mapy?: number;
}

interface ISearchPlacesResponseData {
  title: string;
  address: string;
  road_address: string;
  description: string;
  telephone: string;
  mapx: number;
  mapy: number;
  id: number;
  createdAt: Date;
  similarity: number;
}

const searchPlaces = async (body: ISearchPlacesBody) => {
  const { data } = await axiosInstance.post<
    CommonResponse<ISearchPlacesResponseData>
  >(API_URL.PLACE.SEARCH_PLACE, body);
  return data;
};

const useSearchPlacesMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: searchPlaces,
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(['searchResults', variables.keyword], data.data);

      // Redirect to the search results page
      router.push(`/place/results`);
    },
  });
};

export default useSearchPlacesMutation;
