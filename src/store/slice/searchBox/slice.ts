import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchBoxState {
  isFocused: boolean;
  inputText: string;
}

const initialState: SearchBoxState = {
  isFocused: false,
  inputText: '',
};

const { reducer: searchBoxReducer, actions } = createSlice({
  name: 'searchBox',
  initialState,
  reducers: {
    setIsFocused: (state, { payload }: PayloadAction<boolean>) => {
      state.isFocused = payload;
    },
    setInputText: (state, { payload }: PayloadAction<string>) => {
      state.inputText = payload;
    },
  },
});

export const { setIsFocused, setInputText } = actions;

export default searchBoxReducer;
