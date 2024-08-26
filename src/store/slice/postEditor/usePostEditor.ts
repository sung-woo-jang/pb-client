import { RootState } from '@/store';
import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '@/hooks/redux-hooks';

function usePostEditor() {
  const storedPostEditor = (state: RootState) => state.postEditor.keywords;
  const isChecked = createSelector(storedPostEditor, (items) =>
    items
      .filter(({ isCheck }) => isCheck)
      .map(({ id }) => ({ keyword: String(id) }))
  );
  const keywords = useAppSelector(isChecked);
  return { keywords };
}

export default usePostEditor;
