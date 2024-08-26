'use client';
import VisitDate from '@/app/post/_components/VisitDate';
import AddPicture from '@/app/post/_components/AddPicture';
import Review from '@/app/post/_components/Review';
import ExitArea from '@/app/post/_components/ExitArea';
import SelectRate from '@/app/post/_components/SelectRate';
import TagPicker from '@/app/post/_components/TagPicker';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { useEffect } from 'react';
import { resetPostEditorState } from '@/store/slice/postEditor/slice';

export default function Page() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetPostEditorState());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center w-full p-4 space-y-4">
      <VisitDate />
      <AddPicture />
      <Review />
      <TagPicker />
      <SelectRate />
      <ExitArea />
    </div>
  );
}
