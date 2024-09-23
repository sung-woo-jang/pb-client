import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CircleColors } from '@/constants/COLORS';

interface AddPPCategoryDrawerState {
  addPPCategoryDrawerState: boolean;
  addPPCategoryCategoryName: string;
  addPPCategoryMemo: string;
  addPPCategoryLink: string;
  addPPCategoryPickerColor: CircleColors;
}

const initialState: AddPPCategoryDrawerState = {
  addPPCategoryDrawerState: false,
  addPPCategoryCategoryName: '',
  addPPCategoryMemo: '',
  addPPCategoryLink: '',
  addPPCategoryPickerColor: CircleColors.RED,
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
    setAddPPCategoryName: (state, action: PayloadAction<string>) => {
      state.addPPCategoryCategoryName = action.payload;
    },
    setAddPPCategoryMemo: (state, action: PayloadAction<string>) => {
      state.addPPCategoryMemo = action.payload;
    },
    setAddPPCategoryLink: (state, action: PayloadAction<string>) => {
      state.addPPCategoryLink = action.payload;
    },
    setAddPPCategoryPickerColor: (
      state,
      action: PayloadAction<CircleColors>
    ) => {
      state.addPPCategoryPickerColor = action.payload;
    },
  },
});

export const {
  setAddPPCategoryState,
  toggleAddPPCategoryDrawerState,
  setAddPPCategoryName,
  setAddPPCategoryMemo,
  setAddPPCategoryLink,
  setAddPPCategoryPickerColor,
} = actions;

export default addPPCategoryDrawerReducer;
