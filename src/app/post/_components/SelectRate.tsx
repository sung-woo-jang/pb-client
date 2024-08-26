'use client';
import ContentsBox from '@/components/common/ContentsBox';
import * as React from 'react';
import { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setPostEditorRate } from '@/store/slice/postEditor/slice';

export default function SelectRate() {
  const dispatch = useAppDispatch();
  const rate = useAppSelector((state) => state.postEditor.rate);
  const [hover, setHover] = useState<number>(0);

  const handleMouseEnter = (starIndex: number) => {
    setHover(starIndex);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  const handleClick = (starIndex: number) => {
    dispatch(setPostEditorRate(starIndex));
  };

  return (
    <ContentsBox>
      <div className="w-full">
        <div className="flex flex-col space-y-1.5">
          <h3 className="leading-none tracking-tight text-lg font-bold">
            별점을 선택해주세요
          </h3>
        </div>
        <div className="p-6 pt-0 flex flex-col items-center mt-4">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, index) => {
              const starValue = index + 1;
              return (
                <button
                  key={index}
                  onMouseEnter={() => handleMouseEnter(starValue)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(starValue)}
                  aria-label={`${starValue} 점`}
                  tabIndex={0}
                >
                  <FaRegStar
                    className={`w-8 h-8 transition-colors ${
                      starValue <= (hover || rate)
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-sm font-medium">
            {rate > 0 ? `선택된 평점: ${rate}점` : '평점을 선택해주세요'}
          </p>
        </div>
      </div>
    </ContentsBox>
  );
}
