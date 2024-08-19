import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setPPCategoryDetailListDrawerState,
  setPPCategoryId,
  togglePPCategoryDetailListDrawerState,
} from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/slice';

export default function usePPCategoryDetailListDrawer() {
  const ppCategoryDetailListDrawerState = useAppSelector(
    (state) => state.ppCategoryDetailListDrawer.ppCategoryDetailListDrawerState
  );
  const ppCategoryId = useAppSelector(
    (state) => state.ppCategoryDetailListDrawer.ppCategoryId
  );
  const dispatch = useAppDispatch();

  const ppCategoryDetailListDrawerOpenHandler = () => {
    dispatch(setPPCategoryDetailListDrawerState(true));
  };

  const setPPCategoryDetailListDrawerHandler = (state: boolean) => {
    dispatch(setPPCategoryDetailListDrawerState(state));
  };
  const ppCategoryDetailListDrawerToggleHandler = () => {
    dispatch(togglePPCategoryDetailListDrawerState());
  };

  const setPPCategoryIdHandler = (categoryId: number) => {
    dispatch(setPPCategoryId(categoryId));
  };

  return {
    ppCategoryId,
    ppCategoryDetailListDrawerState,
    setPPCategoryIdHandler,
    ppCategoryDetailListDrawerToggleHandler,
    setPPCategoryDetailListDrawerHandler,
    ppCategoryDetailListDrawerOpenHandler,
  };
}
