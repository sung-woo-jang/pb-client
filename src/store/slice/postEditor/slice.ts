import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

interface PostEditorState {
  visitDate: Dayjs | null;
  placeImages: FileList | null;
  content: string;
  selectedKeywords: string[];
  rate: number;
}

const initialState: PostEditorState = {
  visitDate: null,
  placeImages: null,
  content: '',
  selectedKeywords: [],
  rate: 1,
};

const { reducer: postEditorReducer, actions } = createSlice({
  name: 'postEditor',
  initialState,
  reducers: {
    resetPostEditorState(state) {
      Object.assign(state, initialState);
    },
    setPostVisitDate: (state, action: PayloadAction<Dayjs | null>) => {
      state.visitDate = action.payload;
    },
    setPlaceImages: (state, action: PayloadAction<FileList | null>) => {
      state.placeImages = action.payload;
    },
    setPostEditorContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    togglePostEditorKeyword: (state, action: PayloadAction<string>) => {
      const index = state.selectedKeywords.indexOf(action.payload);
      if (index !== -1) {
        state.selectedKeywords.splice(index, 1);
      } else {
        state.selectedKeywords.push(action.payload);
      }
    },
    setPostEditorRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload;
    },
  },
});

export const {
  resetPostEditorState,
  setPostVisitDate,
  setPlaceImages,
  setPostEditorContent,
  togglePostEditorKeyword,
  setPostEditorRate,
} = actions;

export default postEditorReducer;
