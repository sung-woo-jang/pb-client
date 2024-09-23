'use client';
import styles from './styles/styles.module.scss';
import SearchPlaceInfo from '@/app/place/search/_components/SearchPlaceInfo';
import LocationInfo from '@/app/place/search/_components/LocationInfo';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import useSearchPlaces, { ISearchPlacesQuery } from '@/api/search/searchPlaces';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { useAppSelector } from '@/hooks/redux-hooks';

function SearchContent() {
  const searchParams = useSearchParams();
  const [parsedParams, setParsedParams] = useState<ISearchPlacesQuery | null>(
    null
  );

  useEffect(() => {
    // Todo: keyword에 값이 없으면 그에 따른 작업 추가
    // ex) 다른 페이지로 이동
    const keyword = searchParams.get('keyword');

    if (!keyword) return; // keyword is required, so we return if it's not present

    const params: ISearchPlacesQuery = {
      keyword: decodeURIComponent(keyword),
    };

    const offset = searchParams.get('offset');
    if (offset) params.offset = parseInt(offset, 10);

    const limit = searchParams.get('limit');
    if (limit) params.limit = parseInt(limit, 10);

    const mapx = searchParams.get('mapx');
    if (mapx) params.mapx = parseFloat(mapx);

    const mapy = searchParams.get('mapy');
    if (mapy) params.mapy = parseFloat(mapy);

    setParsedParams(params);
  }, [searchParams]);

  const { data, isSuccess, isLoading } = useSearchPlaces(
    parsedParams || { keyword: '' }
  );

  const headerHeight = useAppSelector((state) => state.common.headerHeight);

  return (
    <div
      className={styles.container}
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
    >
      <LocationInfo />
      {isLoading && <LoadingSpinner size={60} />}
      {isSuccess &&
        data.map((placeInfo) => (
          <SearchPlaceInfo key={placeInfo.id} placeInfo={placeInfo} />
        ))}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner size={60} />}>
      <SearchContent />
    </Suspense>
  );
}
