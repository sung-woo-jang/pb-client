import ContentsBox from '@/components/common/ContentsBox';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import * as React from 'react';
import { ChangeEvent } from 'react';
import classes from '@/components/common/TextArea/styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setPostEditorContent } from '@/store/slice/postEditor/slice';

export default function Review() {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.postEditor.content);
  const contentChangeHandler = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (content.length <= 400) dispatch(setPostEditorContent(value));
  };
  return (
    <ContentsBox>
      <div className={classes.inputContainer}>
        <label htmlFor="name" className={`${classes.label} mb-2`}>
          <div className="flex items-center space-x-2">
            <CreateOutlinedIcon />
            <p className="text-lg font-bold text-gray-500">
              리뷰를 작성해주세요
            </p>
          </div>
        </label>
        <span className="text-sm text-gray-500">
          {content.length}/{400}
        </span>
      </div>
      <input
        id="name"
        type="text"
        placeholder={
          '플벚 공공장소 입니다. 욕설, 비방, 명예훼손성 표현은 자제해주세요.'
        }
        className={classes.input}
        value={content}
        onChange={contentChangeHandler}
      />
    </ContentsBox>
  );
}
