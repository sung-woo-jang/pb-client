import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface drawerState {
  commentDrawerState: boolean;
  addPPCategoryState: boolean;
  addPPState: boolean;
}

const initialState: drawerState = {
  commentDrawerState: false,
  addPPCategoryState: false,
  addPPState: false,
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
      state.addPPCategoryState = action.payload;
    },
    toggleAddPPCategoryState: (state) => {
      state.addPPCategoryState = !state.addPPCategoryState;
    },
    setAddPPState: (state, action: PayloadAction<boolean>) => {
      state.addPPState = action.payload;
    },
    toggleAddPPState: (state) => {
      state.addPPState = !state.addPPState;
    },
  },
});

export const {
  toggleCommentDrawer,
  setCommentDrawerState,
  setAddPPCategoryState,
  toggleAddPPCategoryState,
  setAddPPState,
  toggleAddPPState,
} = actions;

export default drawerReducer;
