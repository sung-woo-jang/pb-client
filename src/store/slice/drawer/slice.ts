import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface drawerState {
  addPPCategoryDrawerState: boolean;
  editPPCategoryDrawerState: boolean;
  addPPDrawerState: boolean;
}

const initialState: drawerState = {
  addPPCategoryDrawerState: false,
  editPPCategoryDrawerState: false,
  addPPDrawerState: false,
};

const { reducer: drawerReducer, actions } = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setAddPPCategoryState: (state, action: PayloadAction<boolean>) => {
      state.addPPCategoryDrawerState = action.payload;
    },
    toggleAddPPCategoryDrawerState: (state) => {
      state.addPPCategoryDrawerState = !state.addPPCategoryDrawerState;
    },
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
  setAddPPCategoryState,
  toggleAddPPCategoryDrawerState,
  setAddPPDrawerState,
  toggleAddPPDrawerState,
  setEditPPCategoryDrawerState,
  toggleEditPPCategoryDrawerState,
} = actions;

export default drawerReducer;
