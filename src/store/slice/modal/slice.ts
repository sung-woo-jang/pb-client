import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  label: string;
  modalState: boolean;
}

const initialState: ModalState = {
  label: '',
  modalState: false,
};

const { reducer: modalReducer, actions } = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setLabel(state, { payload }: PayloadAction<string>) {
      state.label = payload;
    },
    setModalState(state, { payload }: PayloadAction<boolean>) {
      state.modalState = payload;
    },
  },
});

export const { setLabel, setModalState } = actions;

export default modalReducer;
