interface ICreateMarkers {
  latLngs: [number, number][];
}

export default function createMarkers({ latLngs }: ICreateMarkers) {
  const size = 12;

  return latLngs?.map(([lat, lng]) => {
    return new naver.maps.Marker({
      icon: {
        content: getMarkerContent(size),
        size: new naver.maps.Size(size, size),
      },
      position: new naver.maps.LatLng(lat, lng),
      clickable: true,
    });
  });
}

export function getMarkerContent(size: number) {
  return `<img src="/marker.png" style="width: ${size}px;height: ${size}px;box-shadow: 0 0 7px 1px #0267FF;border-radius: ${
    size / 2
  }px" alt="" />`;
}
