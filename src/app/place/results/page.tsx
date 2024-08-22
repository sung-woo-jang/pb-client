'use client';
import styles from './styles.module.scss';
import ResultBox from '@/app/place/results/_components/ResultBox';
import LocationInfo from '@/app/place/results/_components/LocationInfo';
import SearchBox from '@/app/place/results/_components/SearchBox';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSearchPlaces, { ISearchPlacesQuery } from '@/api/place/searchPlaces';

export default function Page() {
  const searchParams = useSearchParams();
  const [parsedParams, setParsedParams] = useState<ISearchPlacesQuery | null>(
    null
  );

  useEffect(() => {
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

  useSearchPlaces(parsedParams || { keyword: '' });

  return (
    <div className={styles.container}>
      <SearchBox />
      <LocationInfo />
      <ResultBox />
    </div>
  );
}
