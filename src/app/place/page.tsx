'use client';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';
import NaverMap from '@/components/NaverMap';

export default function Page() {
  const { data, isSuccess, isLoading } = useGetAllMyPlacePick();

  if (isLoading) return <LoadingSpinner size={60} />;
  if (isSuccess) {
    return (
      <div className="w-screen h-screen flex flex-col">
        <NaverMap placeDetails={data.placeDetails} />
      </div>
    );
  }
}
