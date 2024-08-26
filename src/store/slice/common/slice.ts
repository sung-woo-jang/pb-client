import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  headerHeight: number;
}

const initialState: CommonState = {
  headerHeight: 0,
};

const { reducer: commonReducer, actions } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setHeaderHeight(state, { payload }: PayloadAction<number>) {
      state.headerHeight = payload;
    },
  },
});

export const { setHeaderHeight } = actions;

export default commonReducer;
