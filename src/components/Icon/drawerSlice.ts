import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface drawerState {
  isDrawerOpen: boolean;
}

const initialState: drawerState = {
  isDrawerOpen: false,
};

const { reducer: drawerReducer, actions } = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const { toggleDrawer, setDrawerOpen } = actions;

export default drawerReducer;
