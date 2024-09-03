import React, { ChangeEvent } from 'react';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import { IoIosArrowBack } from 'react-icons/io';
import { setInputText } from '@/store/slice/searchBox/slice';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { MdOutlineStarBorder } from 'react-icons/md';
import usePPCategoryList from '@/store/slice/drawer/ppCategoryList/usePPCategoryList';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/navigation';

export default function SearchInput() {
  const dispatch = useAppDispatch();
  const { inputText, inputTextChangeHandler, isFocused, setIsFocusedState } =
    useSearchBoxControls();
  const { drawerOpenHandler } = usePPCategoryList();
  const router = useRouter();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputTextChangeHandler(event.target.value);
  };

  const searchPlaceHandler = () => {
    if (!isEmpty(inputText)) router.push(`/place/search?keyword=${inputText}`);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') searchPlaceHandler();
  };

  const handleFocus = (state: boolean) => {
    setIsFocusedState(state);
    if (!state) {
      dispatch(setInputText(''));
    }
  };
  return (
    <>
      <button className="p-2 focus:outline-none">
        {isFocused ? (
          <IoIosArrowBack
            className="h-5 w-5 text-gray-500"
            onClick={() => {
              handleFocus(false);
            }}
          />
        ) : (
          <MdOutlineStarBorder
            className="h-6 w-6 text-gray-500"
            onClick={drawerOpenHandler}
          />
        )}
      </button>
      <input
        type="text"
        placeholder="계정, 장소명(주소) 검색"
        className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-gray-700"
        value={inputText}
        onChange={handleInputChange}
        onFocus={() => {
          handleFocus(true);
        }}
        onKeyDown={onKeyDownHandler}
      />
    </>
  );
}
