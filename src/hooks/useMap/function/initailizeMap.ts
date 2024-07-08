import { MutableRefObject } from 'react';

export default function initializeMap(
  mapRef: MutableRefObject<naver.maps.Map | undefined>,
  infoWindowRef: MutableRefObject<naver.maps.InfoWindow | undefined>,
  latitude: number,
  longitude: number
) {
  mapRef.current = new naver.maps.Map('map', {
    tileSpare: 16,
    zoom: 15,
    center: new naver.maps.LatLng(latitude, longitude),
  });

  infoWindowRef.current = new naver.maps.InfoWindow({
    content: '',
    anchorSkew: true,
  });
}
