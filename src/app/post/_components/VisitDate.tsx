import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ContentsBox from '@/components/common/ContentsBox';
import * as React from 'react';
import { Dayjs } from 'dayjs';

export default function VisitDate() {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return (
    <ContentsBox>
      <h2 className="text-lg font-bold">메가커피 제물포점</h2>
      <p className="text-sm text-gray-500">방문일자</p>
      <div className="relative mt-2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </ContentsBox>
  );
}
