import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface commonState {
  isOpenInfoSidebar: boolean;
  headerHeight: number;
}

const initialState: commonState = {
  isOpenInfoSidebar: false,
  headerHeight: 0,
};

const { reducer: commonReducer, actions } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsOpenInfoSidebar(state, { payload }: PayloadAction<boolean>) {
      state.isOpenInfoSidebar = payload;
    },
    setHeaderHeight(state, { payload }: PayloadAction<number>) {
      state.headerHeight = payload;
    },
  },
});

export const { setIsOpenInfoSidebar, setHeaderHeight } = actions;

export default commonReducer;
