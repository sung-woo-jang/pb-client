'use client';
import PostCard from '@/components/post/PostCard';

import useGetPostDetail from '@/api/post/getPostDetail';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface ITimelinePageProps {
  params: { postId: string };
}

export default function Page({ params }: ITimelinePageProps) {
  const { data, isSuccess, isLoading } = useGetPostDetail(params.postId);
  if (isLoading) return <LoadingSpinner size={60} />;
  else if (isSuccess) return <PostCard newsfeed={data.data} />;
}
