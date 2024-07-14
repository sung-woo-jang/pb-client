import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchBoxState {
  isFocused: boolean;
}

const initialState: SearchBoxState = {
  isFocused: false,
};

const { reducer: searchBoxReducer, actions } = createSlice({
  name: 'searchBox',
  initialState,
  reducers: {
    setIsFocused: (state, { payload }: PayloadAction<boolean>) => {
      state.isFocused = payload;
    },
  },
});

export const { setIsFocused } = actions;

export default searchBoxReducer;
