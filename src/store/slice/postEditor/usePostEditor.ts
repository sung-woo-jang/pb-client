import { RootState } from '@/store';
import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '@/hooks/redux-hooks';

function usePostEditor() {
  const selectedKeywords = (state: RootState) =>
    state.postEditor.selectedKeywords;

  const formattedKeywords = createSelector(selectedKeywords, (keywords) =>
    keywords.map((keyword) => ({ keyword }))
  );

  const keywords = useAppSelector(formattedKeywords);

  return { keywords };
}

export default usePostEditor;
