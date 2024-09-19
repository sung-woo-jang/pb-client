import usePlaceInfoDrawer from '@/store/slice/drawer/placeInfoDrawer/usePlaceInfoDrawer';
import usePlaceInfo from '@/api/place/placePickInfo';
import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setPlacePickInfo } from '@/store/slice/drawer/placeInfoDrawer/slice';

export function useMarkerClickHandler(markers: naver.maps.Marker[]) {
  const { placeInfoDrawerOpenHandler } = usePlaceInfoDrawer();
  const dispatch = useAppDispatch();
  const { mutate } = usePlaceInfo();
  useEffect(() => {
    const listeners: naver.maps.MapEventListener[] = [];

    markers.forEach((marker) => {
      const listener = marker.addListener(
        'click',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_: naver.maps.PointerEvent) => {
          const { x: mapx, y: mapy } = marker.getPosition();

          mutate(
            { mapx, mapy },
            {
              onSuccess: (data) => {
                dispatch(setPlacePickInfo(data.data));
                placeInfoDrawerOpenHandler();
              },
              onError: () => {
                console.log('데이터 없음');
              },
            }
          );
        }
      );

      listeners.push(listener);
    });

    // Clean up function
    return () => {
      listeners.forEach((listener) => {
        naver.maps.Event.removeListener(listener);
      });
    };
  }, [dispatch, markers, mutate, placeInfoDrawerOpenHandler]);
}
