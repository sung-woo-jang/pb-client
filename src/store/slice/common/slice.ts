import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  isOpenInfoSidebar: boolean;
  headerHeight: number;
}

const initialState: CommonState = {
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
