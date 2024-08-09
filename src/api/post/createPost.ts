import { axiosInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';
import { ICreatePlaceBody } from '@/api/place/createPlace';
import { ICreatePlaceCategoryRequestBody } from '@/api/place/createPlaceCategory';

interface ICreateKeywordRequestBody {
  keyword: string;
}

interface ICreatePostRequestBody {
  content: string;
  visitDate: Date;
  rate: number;
  placeImages: File[];
  place: ICreatePlaceBody;
  placeCategory: ICreatePlaceCategoryRequestBody;
  placeId: number;
  keywords: ICreateKeywordRequestBody[];
}

const createPost = async (body: ICreatePostRequestBody) => {
  const { data } = await axiosInstance.post(API_URL.POST.CREATE_POST, body);
  return data;
};

const useCreatePost = () => useMutation({ mutationFn: createPost });

export default useCreatePost;
