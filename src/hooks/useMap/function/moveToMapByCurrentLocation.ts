import { MutableRefObject } from 'react';

export default function moveToMapByCurrentLocation(
  mapRef: MutableRefObject<naver.maps.Map | undefined>
) {
  const map = mapRef.current;
  if (!map) return;

  // 브라우저가 지오로케이션을 지원하는지 확인
  if (navigator.geolocation) {
    // 현재 위치를 가져와 위치 정보 업데이트
    navigator.geolocation.getCurrentPosition(function (position) {
      // 현재 위치의 위도와 경도를 상태에 저장
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      map.panTo(new naver.maps.LatLng(latitude, longitude));
    });
  } else {
    //  TODO: Alert 띄우기
    console.log(navigator.geolocation);
  }
}
