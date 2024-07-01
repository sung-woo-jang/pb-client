import WestIcon from '@mui/icons-material/West';
import ContentsBox from '@/components/common/ContentsBox';
import * as React from 'react';
import Link from 'next/link';

export default function ExitArea() {
  return (
    <ContentsBox>
      <div className="flex items-center justify-between">
        <Link href={'/'} className="text-lg font-bold">
          <WestIcon className="w-6 h-6 mr-2" />
          나가기
        </Link>
        <button className="text-lg font-bold">등록</button>
      </div>
    </ContentsBox>
  );
}
