import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setAddPPDrawerState,
  toggleAddPPDrawerState,
} from '@/store/slice/drawer/addPPDrawer/slice';

export default function useAddPPDrawer() {
  const addPPDrawerState = useAppSelector(
    (state) => state.addPPDrawer.addPPDrawerState
  );
  const dispatch = useAppDispatch();

  const addPPDrawerOpenHandler = () => {
    dispatch(setAddPPDrawerState(true));
  };
  const addPPDrawerCloseHandler = () => {
    dispatch(setAddPPDrawerState(false));
  };

  const setAddPPDrawerHandler = (state: boolean) => {
    dispatch(setAddPPDrawerState(state));
  };

  const addPPDrawerToggleHandler = () => {
    dispatch(toggleAddPPDrawerState());
  };

  return {
    addPPDrawerState,
    addPPDrawerOpenHandler,
    setAddPPDrawerHandler,
    addPPDrawerToggleHandler,
    addPPDrawerCloseHandler,
  };
}
