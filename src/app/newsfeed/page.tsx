'use client';
import PostCard from '@/components/post/PostCard';
import useGetNewsFeeds from '@/api/newsfeed/getNewsFeeds';

export default function Page() {
  const { data } = useGetNewsFeeds();
  return data?.data.map((newsfeed) => (
    <PostCard key={newsfeed.id} newsfeed={newsfeed} />
  ));
}
