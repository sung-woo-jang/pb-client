import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PPCategoryListState {
  ppCategoryListDrawerState: boolean;
}

const initialState: PPCategoryListState = {
  ppCategoryListDrawerState: false,
};

const { reducer: ppCategoryListDrawerReducer, actions } = createSlice({
  name: 'ppCategoryListDrawer',
  initialState,
  reducers: {
    setPPCategoryDrawerState: (state, action: PayloadAction<boolean>) => {
      state.ppCategoryListDrawerState = action.payload;
    },
  },
});

export const { setPPCategoryDrawerState } = actions;

export default ppCategoryListDrawerReducer;
