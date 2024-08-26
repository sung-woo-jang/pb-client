import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ContentsBox from '@/components/common/ContentsBox';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setPostVisitDate } from '@/store/slice/postEditor/slice';

export default function VisitDate() {
  const dispatch = useAppDispatch();
  const placeTitle = useAppSelector((state) => state.postEditor.title);
  const visitDate = useAppSelector((state) => state.postEditor.visitDate);
  return (
    <ContentsBox>
      <h2 className="text-lg font-bold">{placeTitle}</h2>
      <p className="text-sm text-gray-500">방문일자</p>
      <div className="relative mt-2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              value={visitDate}
              onChange={(date) => {
                dispatch(setPostVisitDate(date));
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </ContentsBox>
  );
}
