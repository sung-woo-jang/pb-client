import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slice/common/slice';
import drawerReducer from '@/store/slice/drawer/slice';
import modalReducer from '@/store/slice/modal/slice';
import searchBoxReducer from '@/store/slice/searchBox/slice';
import ppCategoryDetailListDrawerReducer from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/slice';
import commentDrawerReducer from '@/store/slice/drawer/commentDrawer/slice';

const store = configureStore({
  reducer: {
    common: commonReducer,
    drawer: drawerReducer,
    ppCategoryDetailListDrawer: ppCategoryDetailListDrawerReducer,
    commentDrawer: commentDrawerReducer,
    modal: modalReducer,
    searchBox: searchBoxReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
