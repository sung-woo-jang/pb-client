import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface drawerState {
  commentDrawerState: boolean;
  addPPCategoryDrawerState: boolean;
  addPPDrawerState: boolean;
}

const initialState: drawerState = {
  commentDrawerState: false,
  addPPCategoryDrawerState: false,
  addPPDrawerState: false,
};

const { reducer: drawerReducer, actions } = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setCommentDrawerState: (state, action: PayloadAction<boolean>) => {
      state.commentDrawerState = action.payload;
    },
    toggleCommentDrawer: (state) => {
      state.commentDrawerState = !state.commentDrawerState;
    },
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
  },
});

export const {
  toggleCommentDrawer,
  setCommentDrawerState,
  setAddPPCategoryState,
  toggleAddPPCategoryDrawerState,
  setAddPPDrawerState,
  toggleAddPPDrawerState,
} = actions;

export default drawerReducer;
