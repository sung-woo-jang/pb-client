import { MutableRefObject } from 'react';

export default function getLatLan(
  mapRef: MutableRefObject<naver.maps.Map | undefined>,
  infoWindowRef: MutableRefObject<naver.maps.InfoWindow | undefined>
) {
  const map = mapRef.current;
  const infoWindow = infoWindowRef.current;
  if (!map || !infoWindow) return;

  map.addListener('click', (e) => {
    console.log(e);
  });
}
