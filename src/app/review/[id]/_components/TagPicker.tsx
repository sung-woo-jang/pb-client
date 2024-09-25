import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { togglePostEditorKeyword } from '@/store/slice/postEditor/slice';
import { useQueryClient } from '@tanstack/react-query';
import { CommonResponse } from '@/types/apiTypes';
import {
  filterCodeTypes,
  IGetAllCodesResponseData,
} from '@/api/code/getAllCodes';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';

export default function TagPicker() {
  const dispatch = useAppDispatch();
  const selectedKeywords = useAppSelector(
    (state) => state.postEditor.selectedKeywords
  );
  const queryClient = useQueryClient();

  const allCodes = queryClient.getQueryData<
    CommonResponse<IGetAllCodesResponseData[]>
  >(generateQueryKeysFromUrl(API_URL.CODE.GET_ALL_CODES))
    ?.data as IGetAllCodesResponseData[];

  const keywordCodeTypes = useMemo(
    () => filterCodeTypes(allCodes || [], 'KEYWORD'),
    [allCodes]
  );

  const toggleCheck = (codeId: string) => {
    dispatch(togglePostEditorKeyword(codeId));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">어떤 점이 좋았나요? (필수)</h3>
      <p className="text-sm text-gray-600 mb-4">
        이 장소에 어울리는 키워드를 골라주세요. (1개-5개)
      </p>

      <div className="space-y-6">
        {keywordCodeTypes.map((codeType) => (
          <div key={codeType.typeId}>
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <span className="ml-2">{codeType.typeName}</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {codeType.codes.map((code) => {
                const isSelected = selectedKeywords.includes(code.codeId);
                return (
                  <button
                    key={code.codeId}
                    onClick={() => toggleCheck(code.codeId)}
                    className={`flex items-center justify-start px-3 py-2 rounded-full text-sm transition-colors duration-200 ${
                      isSelected
                        ? 'bg-blue-100 text-blue-600 font-semibold'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="ml-2">{code.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
