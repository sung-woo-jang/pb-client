import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface commonState {
  value: number;
  isOpenInfoSidebar: boolean;
}

const initialState: commonState = {
  value: 0,
  isOpenInfoSidebar: false,
};

const { reducer: commonReducer, actions } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    setIsOpenInfoSidebar(state, { payload }: PayloadAction<boolean>) {
      state.isOpenInfoSidebar = payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setIsOpenInfoSidebar } = actions;

export default commonReducer;
