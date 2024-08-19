import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface drawerState {
  addPPDrawerState: boolean;
}

const initialState: drawerState = {
  addPPDrawerState: false,
};

const { reducer: addPPDrawerReducer, actions } = createSlice({
  name: 'addPPDrawer',
  initialState,
  reducers: {
    setAddPPDrawerState: (state, action: PayloadAction<boolean>) => {
      state.addPPDrawerState = action.payload;
    },
    toggleAddPPDrawerState: (state) => {
      state.addPPDrawerState = !state.addPPDrawerState;
    },
  },
});

export const { setAddPPDrawerState, toggleAddPPDrawerState } = actions;

export default addPPDrawerReducer;
