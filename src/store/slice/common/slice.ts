import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface commonState {
  isOpenInfoSidebar: boolean;
}

const initialState: commonState = {
  isOpenInfoSidebar: false,
};

const { reducer: commonReducer, actions } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsOpenInfoSidebar(state, { payload }: PayloadAction<boolean>) {
      state.isOpenInfoSidebar = payload;
    },
  },
});

export const { setIsOpenInfoSidebar } = actions;

export default commonReducer;
