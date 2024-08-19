import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import {
  setEditPPCategoryDrawerState,
  toggleEditPPCategoryDrawerState,
} from '@/store/slice/drawer/editPPCategoryDrawer/slice';

export default function useEditPPCategoryDrawer() {
  const editPPCategoryDrawerState = useAppSelector(
    (state) => state.editPPCategoryDrawer.editPPCategoryDrawerState
  );

  const dispatch = useAppDispatch();

  const editPPCategoryDrawerOpenHandler = () => {
    dispatch(setEditPPCategoryDrawerState(true));
  };

  const setEditPPCategoryDrawerHandler = (state: boolean) => {
    dispatch(setEditPPCategoryDrawerState(state));
  };

  const editPPCategoryDrawerToggleHandler = () => {
    dispatch(toggleEditPPCategoryDrawerState());
  };

  return {
    editPPCategoryDrawerState,
    editPPCategoryDrawerOpenHandler,
    setEditPPCategoryDrawerHandler,
    editPPCategoryDrawerToggleHandler,
  };
}
