'use client';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import NaverMap from '@/components/NaverMap';
import React from 'react';
import SearchHistory from '@/components/common/Search/SearchHistory';
import SearchBox from '@/components/common/Search/SearchBox';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';

export default function Page() {
  // 네이버 지도 객체를 저장할 참조를 생성
  const { data, isSuccess, isLoading } = useGetAllMyPlacePick();
  const { isFocused } = useSearchBoxControls();
  if (isLoading) return <LoadingSpinner size={60} />;
  if (isSuccess) {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <div className="transition-opacity duration-300 ease-in-out">
          {isFocused ? <SearchHistory /> : <SearchBox />}
        </div>
        <NaverMap placeDetails={data.placeDetails} />
      </div>
    );
  }
}
