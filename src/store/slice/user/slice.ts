import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  name: string | null;
  nickname: string | null;
  profileImage: string | null;
  id: string | null;
}

const initialState: UserState = {
  email: null,
  name: null,
  nickname: null,
  profileImage: null,
  id: null,
};

const { reducer: userReducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
  },
});

export const { setUserInfo } = actions;

export default userReducer;
