import ContentsBox from '@/components/common/ContentsBox';
import Button from '@mui/material/Button';
import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export default function TagPicker() {
  const sx: SxProps<Theme> = {
    color: 'black',
    borderColor: 'gray',
  };

  const checkedSX: SxProps<Theme> = {
    color: '#73A9FE',
    borderColor: '#73A9FE',
    background: '#EFF4FD',
    fontWeight: 'bold',
  };

  const [buttonLabel, setButtonLabel] = React.useState([
    { id: 1, label: '맛있어요', isCheck: false },
    { id: 2, label: '깨끗해요', isCheck: false },
    { id: 3, label: '친절해요', isCheck: false },
    { id: 4, label: '조용해요', isCheck: false },
    { id: 5, label: '분위기가 좋아요', isCheck: false },
    { id: 6, label: '예약이 편리해요', isCheck: false },
    { id: 7, label: '주차하기 편해요', isCheck: false },
    { id: 8, label: '서비스가 좋아요', isCheck: false },
  ]);

  const toggleCheck = (id: number) => {
    setButtonLabel((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isCheck: !item.isCheck } : item
      )
    );
  };

  return (
    <ContentsBox>
      <div className="flex flex-col space-y-1.5">
        <h3 className="leading-none tracking-tight text-lg font-bold">
          이런 점이 좋았어요 (필수)
        </h3>
        <p className="text-sm text-muted-foreground text-muted-foreground">
          이 장소에 어울리는 키워드를 골라주세요
        </p>
      </div>
      <div
        className="p-6 pt-0 grid grid-cols-2 gap-2 mt-4"
        style={{ overflow: 'auto' }}
      >
        {buttonLabel.map(({ label, id, isCheck }) => (
          <Button
            key={id}
            variant="outlined"
            sx={isCheck ? checkedSX : sx}
            onClick={() => {
              toggleCheck(id);
            }}
          >
            {label}
          </Button>
        ))}
      </div>
    </ContentsBox>
  );
}
