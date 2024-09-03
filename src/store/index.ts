import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './slice/common/slice';
import modalReducer from '@/store/slice/modal/slice';
import searchBoxReducer from '@/store/slice/searchBox/slice';
import ppCategoryDetailListDrawerReducer from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/slice';
import commentDrawerReducer from '@/store/slice/drawer/commentDrawer/slice';
import addPPCategoryDrawerReducer from '@/store/slice/drawer/addPPCategoryDrawer/slice';
import addPPDrawerReducer from '@/store/slice/drawer/addPPDrawer/slice';
import editPPCategoryDrawerReducer from '@/store/slice/drawer/editPPCategoryDrawer/slice';
import postEditorReducer from '@/store/slice/postEditor/slice';
import ppCategoryListDrawerReducer from '@/store/slice/drawer/ppCategoryList/slice';

const store = configureStore({
  reducer: {
    common: commonReducer,
    modal: modalReducer,
    searchBox: searchBoxReducer,
    postEditor: postEditorReducer,
    ppCategoryDetailListDrawer: ppCategoryDetailListDrawerReducer,
    addPPCategoryDrawer: addPPCategoryDrawerReducer,
    addPPDrawer: addPPDrawerReducer,
    commentDrawer: commentDrawerReducer,
    editPPCategoryDrawer: editPPCategoryDrawerReducer,
    ppCategoryListDrawer: ppCategoryListDrawerReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // TODO: postEditor의 placeImages: FileList | null 를 File[]로 바꿔야 함
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
