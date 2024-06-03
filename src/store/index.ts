import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slice/commonSlice';

const store = configureStore({
  reducer: {
    commom: commonReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
