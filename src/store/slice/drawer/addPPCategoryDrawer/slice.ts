import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddPPCategoryDrawerState {
  addPPCategoryDrawerState: boolean;
}

const initialState: AddPPCategoryDrawerState = {
  addPPCategoryDrawerState: false,
};

const { reducer: addPPCategoryDrawerReducer, actions } = createSlice({
  name: 'addPPCategoryDrawer',
  initialState,
  reducers: {
    setAddPPCategoryState: (state, action: PayloadAction<boolean>) => {
      state.addPPCategoryDrawerState = action.payload;
    },
    toggleAddPPCategoryDrawerState: (state) => {
      state.addPPCategoryDrawerState = !state.addPPCategoryDrawerState;
    },
  },
});

export const { setAddPPCategoryState, toggleAddPPCategoryDrawerState } =
  actions;

export default addPPCategoryDrawerReducer;
