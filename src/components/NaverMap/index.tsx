import { useMap } from '@/hooks/useMap';
import { useRef } from 'react';
import { CircleColors } from '@/constants/COLORS';

interface INaverMapProps {
  placeDetails: [
    number,
    {
      coords: [number, number];
      pickerColor: CircleColors;
    },
  ][];
}

export default function NaverMap({ placeDetails }: INaverMapProps) {
  useMap({ placeDetails });
  const mapRef = useRef<HTMLDivElement | null>(null);

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
