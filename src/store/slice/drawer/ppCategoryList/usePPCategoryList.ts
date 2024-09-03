import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setPPCategoryDrawerState } from '@/store/slice/drawer/ppCategoryList/slice';

export default function usePPCategoryList() {
  const dispatch = useAppDispatch();
  const drawerState = useAppSelector(
    (state) => state.ppCategoryListDrawer.ppCategoryListDrawerState
  );

  const drawerStateChangeHandler = (state: boolean) => {
    dispatch(setPPCategoryDrawerState(state));
  };

  const drawerOpenHandler = () => {
    dispatch(setPPCategoryDrawerState(true));
  };
  const drawerCloseHandler = () => {
    dispatch(setPPCategoryDrawerState(false));
  };

  const toggleDrawerHandler = () => {
    dispatch(setPPCategoryDrawerState(!drawerState));
  };

  return {
    drawerCloseHandler,
    drawerOpenHandler,
    toggleDrawerHandler,
    drawerStateChangeHandler,
    drawerState,
  };
}
