import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { CommonResponse } from '@/types/apiTypes';
import { IGetNewsfeedApiResponseData } from '@/api/newsfeed/getNewsFeeds';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { NumberString } from '@/types/commonTypes';
import isUndefined from 'lodash/isUndefined';

const getPostDetail = async (postId: NumberString) => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetNewsfeedApiResponseData>
  >(API_URL.POST.GET_POST_DETAIL(postId));
  return data;
};

const useGetPostDetail = (postId: NumberString) =>
  useQuery<CommonResponse<IGetNewsfeedApiResponseData>>({
    queryKey: generateQueryKeysFromUrl(API_URL.POST.GET_POST_DETAIL(postId)),
    queryFn: () => getPostDetail(postId),
    enabled: !isUndefined(postId),
  });

export default useGetPostDetail;
