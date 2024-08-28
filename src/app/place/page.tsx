'use client';
import SearchBox from '@/app/place/search/_components/SearchBox';
import { useRef } from 'react';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import SearchHistory from '@/app/place/search/_components/SearchHistory';
import NaverMap from '@/app/place/_components/NaverMap';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';

export default function Page() {
  const { data, isSuccess, isLoading } = useGetAllMyPlacePick();

  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const { isFocused } = useSearchBoxControls();

  if (isLoading) return <LoadingSpinner size={60} />;
  if (isSuccess) {
    return (
      <div className="w-screen h-screen flex flex-col">
        <div ref={searchBoxRef}>
          <SearchBox />
        </div>
        {isFocused && <SearchHistory />}
        <NaverMap
          placeDetails={data.placeDetails}
          searchBoxRef={searchBoxRef}
        />
      </div>
    );
  }
}
