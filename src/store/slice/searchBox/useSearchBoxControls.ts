import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setInputText, setIsFocused } from '@/store/slice/searchBox/slice';

export default function useSearchBoxControls() {
  const isFocused = useAppSelector((state) => state.searchBox.isFocused);
  const inputText = useAppSelector((state) => state.searchBox.inputText);
  const dispatch = useAppDispatch();

  const setIsFocusedState = (state: boolean) => {
    dispatch(setIsFocused(state));
  };

  const inputTextChangeHandler = (str: string) => {
    dispatch(setInputText(str));
  };

  return { inputText, isFocused, setIsFocusedState, inputTextChangeHandler };
}
