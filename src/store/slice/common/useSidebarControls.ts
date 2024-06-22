// Custom hook for InfoSidebar controls
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/common/slice';

export function useSidebarControls() {
  const isOpenInfoSidebar = useAppSelector(
    (state) => state.common.isOpenInfoSidebar
  );

  const dispatch = useAppDispatch();

  const toggleInfoSidebar = () => {
    dispatch(setIsOpenInfoSidebar(!isOpenInfoSidebar));
  };

  return { isOpenInfoSidebar, toggleInfoSidebar };
}
