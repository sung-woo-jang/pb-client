'use client';
import VisitDate from '@/app/review/[id]/_components/VisitDate';
import AddPicture from '@/app/review/[id]/_components/AddPicture';
import Review from '@/app/review/[id]/_components/Review';
import ExitArea from '@/app/review/[id]/_components/ExitArea';
import SelectRate from '@/app/review/[id]/_components/SelectRate';
import TagPicker from '@/app/review/[id]/_components/TagPicker';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { useEffect } from 'react';
import { resetPostEditorState } from '@/store/slice/postEditor/slice';
import useGetPlaceInfoById from '@/api/place/getPlaceInfoById';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface IReviewPageProps {
  params: { id: string };
}

export default function Page({ params: { id } }: IReviewPageProps) {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetPlaceInfoById(id);

  useEffect(() => {
    dispatch(resetPostEditorState());
  }, [dispatch]);
  if (isLoading) return <LoadingSpinner size={60} />;
  else if (isSuccess) {
    const { title, id: placeId } = data;
    return (
      <div className="flex flex-col items-center w-full p-4 space-y-4">
        <VisitDate placeTitle={title} />
        <AddPicture />
        <Review />
        <TagPicker />
        <SelectRate />
        <ExitArea placeId={placeId} />
      </div>
    );
  }
}
