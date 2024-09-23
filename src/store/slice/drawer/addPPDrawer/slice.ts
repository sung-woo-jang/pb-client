import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface drawerState {
  addPPDrawerState: boolean;
  placeId: number | boolean;
  placeTitle: string;
  link: string;
  memo: string;
  alias: string;
  selectedCategoryIds: number[];
}

const initialState: drawerState = {
  addPPDrawerState: false,
  placeId: false,
  placeTitle: '',
  alias: '',
  link: '',
  memo: '',
  selectedCategoryIds: [],
};

const { reducer: addPPDrawerReducer, actions } = createSlice({
  name: 'addPPDrawer',
  initialState,
  reducers: {
    resetAddPPDrawerState: (state) => {
      Object.assign(state, initialState);
    },
    setAddPPDrawerState: (state, action: PayloadAction<boolean>) => {
      state.addPPDrawerState = action.payload;
    },
    toggleAddPPDrawerState: (state) => {
      state.addPPDrawerState = !state.addPPDrawerState;
    },
    setPlaceTitle: (state, action: PayloadAction<string>) => {
      state.placeTitle = action.payload;
    },
    setAlias: (state, action: PayloadAction<string>) => {
      state.alias = action.payload;
    },
    setLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    setMemo: (state, action: PayloadAction<string>) => {
      state.memo = action.payload;
    },
    setPlaceId: (state, action: PayloadAction<number | boolean>) => {
      state.placeId = action.payload;
    },
    toggleSelectedCategoryId: (state, action: PayloadAction<number>) => {
      const index = state.selectedCategoryIds.indexOf(action.payload);
      if (index > -1) {
        state.selectedCategoryIds.splice(index, 1);
      } else {
        state.selectedCategoryIds.push(action.payload);
      }
    },
    addSelectedCategoryId: (state, action: PayloadAction<number>) => {
      if (!state.selectedCategoryIds.includes(action.payload)) {
        state.selectedCategoryIds.push(action.payload);
      }
    },
  },
});

export const {
  setPlaceId,
  setAlias,
  setLink,
  setMemo,
  setPlaceTitle,
  setAddPPDrawerState,
  toggleAddPPDrawerState,
  resetAddPPDrawerState,
  toggleSelectedCategoryId,
  addSelectedCategoryId,
} = actions;

export default addPPDrawerReducer;
