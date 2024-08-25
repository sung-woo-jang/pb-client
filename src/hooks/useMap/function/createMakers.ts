import MarkerContent from '../../../components/Icon/MarkerContent';

interface ICreateMarkers {
  coords: [number, number][];
}

function createMarkers({ coords }: ICreateMarkers) {
  return coords.map(([lat, lng]) => {
    return new naver.maps.Marker({
      icon: {
        content: MarkerContent({}),
        // url: '/marker.png',
        // size: new naver.maps.Size(30, 30),
      },
      position: new naver.maps.LatLng(lat, lng),
      clickable: true,
    });
  });
}

export default createMarkers;
