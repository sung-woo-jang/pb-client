import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentDrawerState {
  commentDrawerState: boolean;
  commentPostId: number;
}

const initialState: CommentDrawerState = {
  commentDrawerState: false,
  commentPostId: 0,
};

const { reducer: commentDrawerReducer, actions } = createSlice({
  name: 'commentDrawer',
  initialState,
  reducers: {
    resetCommentDrawerState: (state) => {
      Object.assign(state, initialState);
    },
    setCommentDrawerState: (state, action: PayloadAction<boolean>) => {
      state.commentDrawerState = action.payload;
    },
    toggleCommentDrawer: (state) => {
      state.commentDrawerState = !state.commentDrawerState;
    },
    setCommentPostId: (state, action: PayloadAction<number>) => {
      state.commentPostId = action.payload;
    },
  },
});

export const {
  resetCommentDrawerState,
  toggleCommentDrawer,
  setCommentPostId,
  setCommentDrawerState,
} = actions;
export default commentDrawerReducer;
