import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setIsFocused } from '@/store/slice/searchBox/slice';

export default function useSearchBoxControls() {
  const isFocused = useAppSelector((state) => state.searchBox.isFocused);
  const dispatch = useAppDispatch();

  const setIsFocusedState = (state: boolean) => {
    dispatch(setIsFocused(state));
  };

  return { isFocused, setIsFocusedState };
}
