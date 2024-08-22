'use client';
import { useGetCoordinates } from '@/api/coords/getCoordinates';
import { useMap } from '@/hooks/useMap';
import SearchBox from '@/app/place/search/_components/SearchBox';
import { useEffect, useRef } from 'react';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import SearchHistory from '@/app/place/search/_components/SearchHistory';

export default function Page() {
  const { data: markers } = useGetCoordinates();
  useMap({ markers });
  const searchBoxRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { isFocused } = useSearchBoxControls();

  useEffect(() => {
    if (mapRef.current) {
      const searchBoxHeight = searchBoxRef.current
        ? searchBoxRef.current.offsetHeight
        : 0;
      mapRef.current.style.height = `calc(100vh - ${searchBoxHeight}px)`;
    }
  }, [isFocused]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div ref={searchBoxRef}>
        <SearchBox />
      </div>
      {isFocused && <SearchHistory />}
      <div
        id="map"
        ref={mapRef}
        className="flex-grow"
        style={{
          width: '100%',
          height: '100%',
          transition: 'all ease 0.5s',
        }}
      />
    </div>
  );
}
