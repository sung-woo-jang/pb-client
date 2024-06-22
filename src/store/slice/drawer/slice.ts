import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface drawerState {
  commentDrawerState: boolean;
}

const initialState: drawerState = {
  commentDrawerState: false,
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
  },
});

export const { toggleCommentDrawer, setCommentDrawerState } = actions;

export default drawerReducer;
