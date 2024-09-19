import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EditPPCategoryDrawerState {
  editPPCategoryDrawerState: boolean;
}

const initialState: EditPPCategoryDrawerState = {
  editPPCategoryDrawerState: false,
};

const { reducer: editPPCategoryDrawerReducer, actions } = createSlice({
  name: 'editPPCategoryDrawer',
  initialState,
  reducers: {
    resetEditPPCategoryDrawer: (state) => {
      Object.assign(state, initialState);
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
  resetEditPPCategoryDrawer,
  setEditPPCategoryDrawerState,
  toggleEditPPCategoryDrawerState,
} = actions;

export default editPPCategoryDrawerReducer;
