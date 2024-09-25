import { useQueryClient } from '@tanstack/react-query';
import { CommonResponse } from '@/types/apiTypes';
import {
  collectCodesByCategory,
  IGetAllCodesResponseData,
} from '@/api/code/getAllCodes';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import { useMemo } from 'react';
import { IKeyword } from '@/api/newsfeed/getNewsFeeds';

interface IKeywordBoxProps {
  keywords: IKeyword[];
}

export default function KeywordBox({ keywords }: IKeywordBoxProps) {
  const queryClient = useQueryClient();

  const allCodes = queryClient.getQueryData<
    CommonResponse<IGetAllCodesResponseData[]>
  >(generateQueryKeysFromUrl(API_URL.CODE.GET_ALL_CODES))
    ?.data as IGetAllCodesResponseData[];

  const codeLabels = useMemo(() => {
    const codes = collectCodesByCategory(allCodes, 'KEYWORD');
    return codes.reduce(
      (acc, code) => {
        acc[code.codeId] = code.label;
        return acc;
      },
      {} as Record<string, string>
    );
  }, [allCodes]);

  return (
    <div className="flex flex-wrap gap-2 p-2">
      {keywords.map(({ keyword, id }) => {
        const label = codeLabels[keyword] || keyword; // Fallback to keyword if label not found
        return (
          <div
            key={id}
            className="flex items-center px-2 py-1 text-xs rounded-full border border-gray-300"
          >
            <span className="ml-1">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
