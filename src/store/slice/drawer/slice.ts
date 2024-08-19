import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface drawerState {
  editPPCategoryDrawerState: boolean;
  addPPDrawerState: boolean;
}

const initialState: drawerState = {
  editPPCategoryDrawerState: false,
  addPPDrawerState: false,
};

const { reducer: drawerReducer, actions } = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setAddPPDrawerState: (state, action: PayloadAction<boolean>) => {
      state.addPPDrawerState = action.payload;
    },
    toggleAddPPDrawerState: (state) => {
      state.addPPDrawerState = !state.addPPDrawerState;
    },
    setEditPPCategoryDrawerState: (state, action: PayloadAction<boolean>) => {
      state.editPPCategoryDrawerState = action.payload;
    },
    toggleEditPPCategoryDrawerState: (state) => {
      state.editPPCategoryDrawerState = !state.editPPCategoryDrawerState;
    },
  },
});

export const {
  setAddPPDrawerState,
  toggleAddPPDrawerState,
  setEditPPCategoryDrawerState,
  toggleEditPPCategoryDrawerState,
} = actions;

export default drawerReducer;
