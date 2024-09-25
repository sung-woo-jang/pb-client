import { axiosInstance } from '@/api/axiosInstance';
import { CommonResponse } from '@/types/apiTypes';
import { API_URL } from '@/constants/API_URL';
import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

interface ICode {
  codeId: string;
  code: string;
  upperCode: string | null;
  sortOrder: number;
  label: string;
}

interface ICodeType {
  typeId: string;
  typeName: string;
  sortOrder: number;
  codes: ICode[];
}

interface ICodeCategory {
  ctcCd: string;
  ctcName: string;
  sortOrder: number;
  codeTypes: ICodeType[];
}

type IGetAllCodesResponseData = ICodeCategory;

const getAllCodes = async () => {
  const { data } = await axiosInstance.get<
    CommonResponse<IGetAllCodesResponseData[]>
  >(API_URL.CODE.GET_ALL_CODES);
  return data;
};

const useGetAllCodes = () =>
  useQuery<
    CommonResponse<IGetAllCodesResponseData[]>,
    unknown,
    IGetAllCodesResponseData[]
  >({
    queryKey: generateQueryKeysFromUrl(API_URL.CODE.GET_ALL_CODES),
    queryFn: getAllCodes,
    select: (data) => data.data,
  });

export default useGetAllCodes;
