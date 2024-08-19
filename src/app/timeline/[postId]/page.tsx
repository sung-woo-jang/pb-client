'use client';
import PostCard from '@/components/post/PostCard';

import useGetPostDetail from '@/api/post/getPostDetail';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface ITimelinePageProps {
  params: { postId: string };
}

export default function Page({ params }: ITimelinePageProps) {
  // TODO: 이것저것 할게 많음. 나중에 와서 정리
  const { data, isSuccess, isLoading } = useGetPostDetail(params.postId);
  if (isLoading) return <LoadingSpinner size={60} />;
  else if (isSuccess) return <PostCard newsfeed={data.data} />;
}
