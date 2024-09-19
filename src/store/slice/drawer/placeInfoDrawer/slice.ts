import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlaceCategory {
  place_category_name: string;
  place_category_name_detail: string;
}

interface PlacePickInfo {
  title: string;
  address: string;
  road_address: string;
  description: string;
  telephone: string;
  placeCategory: PlaceCategory;
}

interface PlaceInfoDrawerState {
  placeInfoDrawerState: boolean;
  info: PlacePickInfo;
}

const initialState: PlaceInfoDrawerState = {
  placeInfoDrawerState: false,
  info: {
    placeCategory: {
      place_category_name: '',
      place_category_name_detail: '',
    },
    title: '',
    address: '',
    road_address: '',
    description: '',
    telephone: '',
  },
};

const { reducer: placeInfoReducer, actions } = createSlice({
  name: 'placeInfoDrawer',
  initialState,
  reducers: {
    setPlaceInfoDrawerState: (state, action: PayloadAction<boolean>) => {
      state.placeInfoDrawerState = action.payload;
    },
    setPlacePickInfo: (state, action: PayloadAction<PlacePickInfo>) => {
      state.info = action.payload;
    },
    resetPlacePickInfoState: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setPlaceInfoDrawerState,
  setPlacePickInfo,
  resetPlacePickInfoState,
} = actions;

export default placeInfoReducer;
