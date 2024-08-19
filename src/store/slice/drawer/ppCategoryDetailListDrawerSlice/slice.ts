import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPPCategoryDetailListDrawerState {
  ppCategoryDetailListDrawerState: boolean;
  ppCategoryId: number;
}

const initialState: IPPCategoryDetailListDrawerState = {
  ppCategoryDetailListDrawerState: false,
  ppCategoryId: 0,
};

const { reducer: ppCategoryDetailListDrawerReducer, actions } = createSlice({
  name: 'ppCategoryDetailListDrawer',
  initialState,
  reducers: {
    setPPCategoryDetailListDrawerState: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.ppCategoryDetailListDrawerState = action.payload;
    },
    togglePPCategoryDetailListDrawerState: (state) => {
      state.ppCategoryDetailListDrawerState =
        !state.ppCategoryDetailListDrawerState;
    },
    setPPCategoryId: (state, action: PayloadAction<number>) => {
      state.ppCategoryId = action.payload;
    },
  },
});

export const {
  setPPCategoryId,
  togglePPCategoryDetailListDrawerState,
  setPPCategoryDetailListDrawerState,
} = actions;

export default ppCategoryDetailListDrawerReducer;
