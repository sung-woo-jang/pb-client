import ContentsBox from '@/components/common/ContentsBox';
import * as React from 'react';
import StarIcon from '@/components/Icon/StarIcon';

export default function SelectRate() {
  return (
    <ContentsBox>
      <div className="w-full">
        <div className="flex flex-col space-y-1.5">
          <h3 className="leading-none tracking-tight text-lg font-bold">
            별점을 선택해주세요
          </h3>
        </div>
        <div className="p-6 pt-0 flex justify-center mt-4 space-x-2">
          <StarIcon className="w-6 h-6 text-yellow-500" />
          <StarIcon className="w-6 h-6" />
          <StarIcon className="w-6 h-6" />
        </div>
      </div>
    </ContentsBox>
  );
}
