'use client';
import styles from './styles.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import { arrowBackIosIconStyle } from '@/app/place/search/_components/SearchBox/cssProps.styles';
import { FaSearch } from 'react-icons/fa';
import React from 'react';
import * as _ from 'lodash';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setInputText } from '@/store/slice/searchBox/slice';

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
  };

  const searchPlaceHandler = () => {
    if (!_.isEmpty(inputText))
      router.push(`/place/search?keyword=${inputText}`);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') searchPlaceHandler();
  };

  return (
    <div className={styles.searchBox}>
      <ArrowBackIosIcon sx={arrowBackIosIconStyle} onClick={handleBlur} />
      <input
        type="text"
        placeholder="ex) 스타벅스"
        onFocus={handleFocus}
        onChange={inputTextChangeHandler}
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
