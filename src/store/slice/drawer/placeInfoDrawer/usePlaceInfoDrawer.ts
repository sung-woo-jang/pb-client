import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setPlaceInfoDrawerState } from '@/store/slice/drawer/placeInfoDrawer/slice';

function usePlaceInfoDrawer() {
  const placeInfoDrawerState = useAppSelector(
    (state) => state.placeInfo.placeInfoDrawerState
  );

  const dispatch = useAppDispatch();

  const setPlaceInfoDrawerStateHandler = (state: boolean) => {
    dispatch(setPlaceInfoDrawerState(state));
  };

  const placeInfoDrawerOpenHandler = () => {
    dispatch(setPlaceInfoDrawerState(true));
  };
  const placeInfoDrawerCloseHandler = () => {
    dispatch(setPlaceInfoDrawerState(false));
  };
  const placeInfoDrawerToggleHandler = () => {
    dispatch(setPlaceInfoDrawerState(!placeInfoDrawerState));
  };

  return {
    placeInfoDrawerState,
    placeInfoDrawerOpenHandler,
    placeInfoDrawerCloseHandler,
    placeInfoDrawerToggleHandler,
    setPlaceInfoDrawerStateHandler,
  };
}

export default usePlaceInfoDrawer;
