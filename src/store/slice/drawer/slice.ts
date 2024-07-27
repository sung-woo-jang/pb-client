import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface drawerState {
  commentDrawerState: boolean;
  addPPCategoryDrawerState: boolean;
  editPPCategoryDrawerState: boolean;
  addPPDrawerState: boolean;
  ppCategoryDetailListDrawerState: boolean;
}

const initialState: drawerState = {
  commentDrawerState: false,
  addPPCategoryDrawerState: false,
  editPPCategoryDrawerState: false,
  addPPDrawerState: false,
  ppCategoryDetailListDrawerState: false,
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
    setEditPPCategoryDrawerState: (state, action: PayloadAction<boolean>) => {
      state.editPPCategoryDrawerState = action.payload;
    },
    toggleEditPPCategoryDrawerState: (state) => {
      state.editPPCategoryDrawerState = !state.editPPCategoryDrawerState;
    },
    setPPCategoryDetailListDrawerState: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.ppCategoryDetailListDrawerState = action.payload;
    },
    togglePPCategoryDetailListDrawerState: (state) => {
      state.ppCategoryDetailListDrawerState =
        !state.ppCategoryDetailListDrawerState;
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
  setEditPPCategoryDrawerState,
  toggleEditPPCategoryDrawerState,
  setPPCategoryDetailListDrawerState,
  togglePPCategoryDetailListDrawerState,
} = actions;

export default drawerReducer;
