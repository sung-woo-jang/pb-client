import ContentsBox from '@/components/common/ContentsBox';
import Button from '@mui/material/Button';
import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { togglePostEditorKeyword } from '@/store/slice/postEditor/slice';

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
export default function TagPicker() {
  const dispatch = useAppDispatch();

  const keywords = useAppSelector((state) => state.postEditor.keywords);

  const toggleCheck = (id: number) => {
    dispatch(togglePostEditorKeyword(id));
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
        {keywords.map(({ label, id, isCheck }) => (
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
