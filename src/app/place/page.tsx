'use client';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';
import NaverMap from '@/components/NaverMap';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import { useAppSelector } from '@/hooks/redux-hooks';
import SearchHistory from '@/components/common/Search/SearchHistory';
import SearchBox from '@/components/common/Search/SearchBox';

export default function Page() {
  // 네이버 지도 객체를 저장할 참조를 생성
  const { data, isSuccess, isLoading } = useGetAllMyPlacePick();
  const { isFocused } = useSearchBoxControls();
  const headerHeight = useAppSelector((state) => state.common.headerHeight);
  if (isLoading) return <LoadingSpinner size={60} />;
  if (isSuccess) {
    return (
      <div style={{ width: '100%', height: `calc(100vh - ${headerHeight}px)` }}>
        <div className="transition-opacity duration-300 ease-in-out">
          {isFocused ? <SearchHistory /> : <SearchBox />}
        </div>
        <NaverMap placeDetails={data.placeDetails} />
      </div>
    );
  }
}
