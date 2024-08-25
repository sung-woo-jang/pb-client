import { useEffect, useRef, useState } from 'react';
import initializeMap from '@/hooks/useMap/function/initailizeMap';
import createMarkers from '@/hooks/useMap/function/createMakers';
import IMap from '@/hooks/useMap/types';
import updateMarkersVisibility from '@/hooks/useMap/function/updateMarkersVisibility';

export function useMap({ coords }: IMap) {
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

  // marker ------------------------------------
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !coords) return;

    // 마커 세팅
    setMarkers(createMarkers({ coords }));
  }, [mapRef, coords]);

  useEffect(() => {
    updateMarkersVisibility(mapRef, markers);
  }, [mapRef, markers]);

  // click marker
  useEffect(() => {
    markers.forEach((marker) => {
      marker.addListener('click', (e) => {
        console.log(e);
        console.log(e.coord);
      });
    });
  }, [markers]);
}
