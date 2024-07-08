import { MutableRefObject } from 'react';

export default interface IMap {
  mapRef: MutableRefObject<naver.maps.Map | undefined>;
  infoWindowRef: MutableRefObject<naver.maps.InfoWindow | undefined>;
  markers?: [number, number][];
}
