'use client';
import PostCard from '@/components/post/PostCard';
import useGetNewsFeeds from '@/api/newsfeed/getNewsFeeds';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';

export default function Page() {
  const { data, isLoading, isSuccess } = useGetNewsFeeds();
  useGetAllMyPlacePick();
  if (isLoading) {
    return <LoadingSpinner size={60} />;
  } else if (isSuccess) {
    return data.map((newsfeed) => (
      <PostCard key={newsfeed.id} newsfeed={newsfeed} />
    ));
  }
}
