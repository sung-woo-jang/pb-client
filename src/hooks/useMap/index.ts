import { useEffect, useRef, useState } from 'react';
import initializeMap from '@/hooks/useMap/function/initailizeMap';
import createMarkers from '@/hooks/useMap/function/createMakers';
import updateMarkersVisibility from '@/hooks/useMap/function/updateMarkersVisibility';
import { CircleColors } from '@/constants/COLORS';
import { useMarkerClickHandler } from '@/hooks/useMap/useMarkerClickHandler';

interface IMap {
  placeDetails?: [
    number,
    {
      coords: [number, number];
      pickerColor: CircleColors;
    },
  ][];
}

export function useMap({ placeDetails }: IMap) {
  // 지도 중심의 초기 좌표를 설정
  const mapRef = useRef<naver.maps.Map>();
  const infoWindowRef = useRef<naver.maps.InfoWindow>();
  // 마커
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);
  // 37.488388, 126.7406796
  // 네이버 지도를 로드한 후 지도 초기화
  // init ------------------------------------
  useEffect(() => {
    initializeMap(mapRef, infoWindowRef, 37.4671534, 126.6628312);
  }, [mapRef, infoWindowRef]);

  // 마커 생성
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !placeDetails) return;

    const newMarkers = createMarkers({ placeDetails });
    setMarkers(newMarkers);

    // 지도에 마커 추가
    newMarkers.forEach((marker) => marker.setMap(map));

    // 컴포넌트 언마운트 시 마커 제거
    return () => {
      newMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [placeDetails]);

  useEffect(() => {
    updateMarkersVisibility(mapRef, markers);
  }, [mapRef, markers]);

  // click marker
  useMarkerClickHandler(markers);
}
