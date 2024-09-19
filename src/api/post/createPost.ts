import { formInstance } from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';
import { useMutation } from '@tanstack/react-query';
import { CommonResponse } from '@/types/apiTypes';

type Keyword = { keyword: string };

interface ICreatePostRequestBody {
  content: string;
  visitDate: Date;
  rate: number;
  placeImages: FileList;
  placeId: number;
  keywords: Keyword[];
}

interface ICreatePostResponseData {
  user: {
    id: string;
    name: string;
    nickname: string;
    email: string;
    profileImage: string;
  };
  id: number;
}

const createPost = async (body: ICreatePostRequestBody) => {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (key === 'keywords') {
      value.forEach((keywordObj: Keyword, index: number) => {
        formData.append(`keywords[${index}][keyword]`, keywordObj.keyword);
      });
    } else if (key !== 'placeImages') {
      formData.append(key, String(value));
    }
  });

  for (let i = 0; i < body.placeImages.length; i++) {
    formData.append('placeImages', body.placeImages[i]);
  }

  const { data } = await formInstance.post(API_URL.POST.CREATE_POST, formData);
  return data;
};

const useCreatePost = () => {
  return useMutation<
    CommonResponse<ICreatePostResponseData>,
    Error,
    ICreatePostRequestBody
  >({
    mutationFn: createPost,
  });
};

export default useCreatePost;
