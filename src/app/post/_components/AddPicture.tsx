import ContentsBox from '@/components/common/ContentsBox';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import * as React from 'react';

export default function AddPicture() {
  return (
    <ContentsBox>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold">사진을 추가해 주세요</p>
        <button className="w-16 h-16 mt-4 bg-gray-200 rounded-full">
          <ControlPointIcon className="w-8 h-8 text-gray-600" />
        </button>
      </div>
    </ContentsBox>
  );
}
