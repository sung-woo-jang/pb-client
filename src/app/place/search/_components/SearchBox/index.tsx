'use client';
import styles from './styles.module.scss';
import { IoIosArrowBack } from 'react-icons/io';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import { FaSearch } from 'react-icons/fa';
import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setInputText } from '@/store/slice/searchBox/slice';

// TODO: 이 컴포넌트 파일 지우기
export default function SearchBox() {
  const { setIsFocusedState } = useSearchBoxControls();
  const inputText = useAppSelector((state) => state.searchBox.inputText);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const inputTextChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputText(value));
  };
  const handleFocus = () => {
    setIsFocusedState(true);
  };

  const handleBlur = () => {
    setIsFocusedState(false);
    dispatch(setInputText(''));
  };

  const onBlurHandler = () => {
    if (inputText === '') {
      setIsFocusedState(false);
    }
  };

  const searchPlaceHandler = () => {
    if (!isEmpty(inputText)) router.push(`/place/search?keyword=${inputText}`);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') searchPlaceHandler();
  };

  return (
    <div className={styles.searchBox}>
      <IoIosArrowBack
        style={{
          color: 'white',
          position: 'absolute',
          left: '1rem',
          marginRight: '1rem',
          cursor: 'pointer',
          fontSize: '1.5rem',
        }}
        onClick={handleBlur}
      />
      <input
        type="text"
        placeholder="ex) 스타벅스"
        onFocus={handleFocus}
        onChange={inputTextChangeHandler}
        onBlur={onBlurHandler}
        value={inputText}
        className={styles.searchInput}
        onKeyDown={onKeyDownHandler}
      />
      <FaSearch
        className={styles.searchInputIcon}
        onClick={searchPlaceHandler}
      />
    </div>
  );
}
