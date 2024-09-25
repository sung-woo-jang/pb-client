import MarkerContent from '@/components/icon/MarkerContent';
import { CircleColors } from '@/constants/COLORS';

interface ICreateMarkers {
  placeDetails: [
    number,
    {
      coords: [number, number];
      pickerColor: CircleColors;
    },
  ][];
}

function createMarkers({ placeDetails }: ICreateMarkers) {
  return placeDetails.map(([placeId, details]) => {
    const [lat, lng] = details.coords;
    return new naver.maps.Marker({
      icon: {
        content: MarkerContent({ color: details.pickerColor }),
        // url: '/marker.png',
        // size: new naver.maps.Size(30, 30),
      },
      position: new naver.maps.LatLng(lat, lng),
      clickable: true,
    });
  });
}

export default createMarkers;
