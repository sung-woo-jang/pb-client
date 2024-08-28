import { useMap } from '@/hooks/useMap';
import { MutableRefObject, useEffect, useRef } from 'react';
import { CircleColors } from '@/constants/COLORS';

interface INaverMapProps {
  placeDetails: [
    number,
    {
      coords: [number, number];
      pickerColor: CircleColors;
    },
  ][];
  searchBoxRef: MutableRefObject<HTMLDivElement | null>;
}

export default function NaverMap({
  placeDetails,
  searchBoxRef,
}: INaverMapProps) {
  useMap({ placeDetails });
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const searchBoxHeight = searchBoxRef.current
        ? searchBoxRef.current.offsetHeight
        : 0;
      mapRef.current.style.height = `calc(100vh - ${searchBoxHeight}px)`;
    }
  }, [searchBoxRef]);
  return (
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
  );
}
