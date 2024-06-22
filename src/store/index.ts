import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slice/common/slice';
import drawerReducer from '@/store/slice/drawerSlice';

const store = configureStore({
  reducer: {
    common: commonReducer,
    drawer: drawerReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
