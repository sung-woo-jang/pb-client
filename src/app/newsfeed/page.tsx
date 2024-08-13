'use client';
import PostCard from '@/components/post/PostCard';
import useGetNewsFeeds from '@/api/newsfeed/getNewsFeeds';
import { useEffect } from 'react';

export default function Page() {
  const { data } = useGetNewsFeeds();
  useEffect(() => {
    if (data) console.log(data.data);
  }, [data]);
  return <PostCard />;
}
