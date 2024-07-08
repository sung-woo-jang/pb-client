import CONST from '@/constants/const';
import { MutableRefObject } from 'react';

export default function updateMarkersVisibility(
  mapRef: MutableRefObject<naver.maps.Map | undefined>,
  markers: naver.maps.Marker[]
) {
  const map = mapRef.current;
  if (!map || markers.length === 0) return;

  // zoom 초기 사이즈가 마커를 표시할 수 있는 최소 줌 사이즈 이상이면 마커 출력
  if (map.getZoom() >= CONST.MARKER_DISPLAYABLE_MIN_ZOOM) {
    markers.forEach((marker) => marker.setMap(map));
  }
}
