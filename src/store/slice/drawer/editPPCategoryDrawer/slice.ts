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
    setEditPPCategoryDrawerState: (state, action: PayloadAction<boolean>) => {
      state.editPPCategoryDrawerState = action.payload;
    },
    toggleEditPPCategoryDrawerState: (state) => {
      state.editPPCategoryDrawerState = !state.editPPCategoryDrawerState;
    },
  },
});

export const { setEditPPCategoryDrawerState, toggleEditPPCategoryDrawerState } =
  actions;

export default editPPCategoryDrawerReducer;
