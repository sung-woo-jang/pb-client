'use client';
import styles from './styles.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import { arrowBackIosIconStyle } from '@/app/place/results/_components/SearchBox/cssProps.styles';
import { FaSearch } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import useSearchPlacesMutation from '@/api/place/searchPlaces';

export default function SearchBox() {
  const { setIsFocusedState } = useSearchBoxControls();
  const [inputText, setInputText] = useState('');
  const { mutate, data, isSuccess } = useSearchPlacesMutation();
  const handleFocus = () => {
    setIsFocusedState(true);
  };

  const handleBlur = () => {
    setIsFocusedState(false);
  };

  const inputTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const searchPlaceHandler = () => {
    mutate({
      keyword: inputText,
      mapx: 126.6540756,
      mapy: 37.4665222,
      limit: 10,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data.data);
    }
  }, [data, isSuccess]);

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchPlaceHandler();
    }
  };

  return (
    <div className={styles.searchBox}>
      <ArrowBackIosIcon sx={arrowBackIosIconStyle} onClick={handleBlur} />
      <input
        type="text"
        placeholder="스타벅스"
        onFocus={handleFocus}
        value={inputText}
        onChange={inputTextChangeHandler}
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
