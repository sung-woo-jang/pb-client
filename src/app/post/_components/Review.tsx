import TextArea from '@/components/common/TextArea';
import FilePenIcon from '@/components/Icon/FilePenIcon';
import ContentsBox from '@/components/common/ContentsBox';
import * as React from 'react';

export default function Review() {
  return (
    <ContentsBox>
      <TextArea
        placeholder={
          '플벚 공공장소 입니다. 욕설, 비방, 명예훼손성 표현은 자제해주세요.'
        }
        maxLength={400}
        label={
          <div className="flex items-center space-x-2">
            <FilePenIcon className="w-6 h-6 text-gray-500" />
            <p className="text-lg font-bold text-gray-500">
              리뷰를 작성해주세요
            </p>
          </div>
        }
      />
    </ContentsBox>
  );
}
