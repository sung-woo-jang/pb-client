'use client';
import Script from 'next/script';
import { useMap } from '@/hooks/useMap';
import { useRef } from 'react';
import { useGetCoordinates } from '@/api/coords/getCoordinates';

export default function Page() {
  // 네이버 지도 객체를 저장할 참조를 생성
  const mapRef = useRef<naver.maps.Map>();
  const infoWindowRef = useRef<naver.maps.InfoWindow>();
  const { data: markers } = useGetCoordinates();
  useMap({ markers, mapRef, infoWindowRef });

  return (
    <div>
      <Script
        strategy="beforeInteractive"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8cqmivfoiq&submodules=geocoder"
      />

      <div id="map" style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}
