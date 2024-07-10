import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slice/common/slice';
import drawerReducer from '@/store/slice/drawer/slice';
import modalReducer from '@/store/slice/modal/slice';

const store = configureStore({
  reducer: {
    common: commonReducer,
    drawer: drawerReducer,
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
