import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slice/common/slice';
import modalReducer from '@/store/slice/modal/slice';
import searchBoxReducer from '@/store/slice/searchBox/slice';
import ppCategoryDetailListDrawerReducer from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/slice';
import commentDrawerReducer from '@/store/slice/drawer/commentDrawer/slice';
import addPPCategoryDrawerReducer from '@/store/slice/drawer/addPPCategoryDrawer/slice';
import addPPDrawerReducer from '@/store/slice/drawer/addPPDrawer/slice';
import editPPCategoryDrawerReducer from '@/store/slice/drawer/editPPCategoryDrawer/slice';

const store = configureStore({
  reducer: {
    common: commonReducer,
    ppCategoryDetailListDrawer: ppCategoryDetailListDrawerReducer,
    addPPCategoryDrawer: addPPCategoryDrawerReducer,
    addPPDrawer: addPPDrawerReducer,
    commentDrawer: commentDrawerReducer,
    editPPCategoryDrawer: editPPCategoryDrawerReducer,
    modal: modalReducer,
    searchBox: searchBoxReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
