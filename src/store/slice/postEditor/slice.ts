import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

interface IKeyword {
  id: number;
  label: string;
  isCheck: boolean;
}

interface PostEditorState {
  // TODO: id, title 삭제
  id: number;
  title: string;
  visitDate: Dayjs | null;
  placeImages: FileList | null;
  content: string;
  keywords: IKeyword[];
  rate: number;
}

const initialState: PostEditorState = {
  id: 0,
  title: '',
  visitDate: null,
  placeImages: null,
  content: '',
  keywords: [
    { id: 1, label: '맛있어요', isCheck: false },
    { id: 2, label: '깨끗해요', isCheck: false },
    { id: 3, label: '친절해요', isCheck: false },
    { id: 4, label: '조용해요', isCheck: false },
    { id: 5, label: '분위기가 좋아요', isCheck: false },
    { id: 6, label: '예약이 편리해요', isCheck: false },
    { id: 7, label: '주차하기 편해요', isCheck: false },
    { id: 8, label: '서비스가 좋아요', isCheck: false },
  ],
  rate: 1,
};

const { reducer: postEditorReducer, actions } = createSlice({
  name: 'postEditor',
  initialState,
  reducers: {
    resetPostEditorState(state) {
      state = initialState;
    },
    setPostEditorId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setPostEditorTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
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
    togglePostEditorKeyword: (state, action: PayloadAction<number>) => {
      state.keywords = state.keywords.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              isCheck: !item.isCheck,
            }
          : item
      );
    },
    setPostEditorRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload;
    },
  },
});

export const {
  resetPostEditorState,
  setPostEditorTitle,
  setPostEditorId,
  setPostVisitDate,
  setPlaceImages,
  setPostEditorContent,
  togglePostEditorKeyword,
  setPostEditorRate,
} = actions;

export default postEditorReducer;
