'use client';
import classes from './styles.module.scss';
import PSResultImageContainer from '@/app/place/[id]/_component/PSResultImageContainer';
import PsResultDescription from '@/app/place/[id]/_component/PSResultDescription';
import PsResultReview from '@/app/place/[id]/_component/PSResultReview';
import Separator from '@/components/common/Separator';
import useSearchPlaceDetail from '@/api/search/getSearchPlaceDetail';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface IPlaceDetailPageProps {
  params: { id: string };
}

export default function Page({ params: { id } }: IPlaceDetailPageProps) {
  const { isSuccess, data, isLoading } = useSearchPlaceDetail(id);
  if (isLoading) {
    return <LoadingSpinner size={60} />;
  } else if (isSuccess) {
    const { post: posts, ...place } = data.data;
    const images = posts.map(({ images }) => images).flat();
    return (
      <div className={classes.wrapper}>
        <main className={classes.main}>
          <div style={{ backgroundColor: 'white' }}>
            <PSResultImageContainer images={images} />
            <PsResultDescription place={place} />
            <h3 className="text-lg font-bold mb-2">리뷰 · 27</h3>
            <Separator />

            {posts.map((post) => (
              <PsResultReview post={post} key={post.id} />
            ))}
          </div>
        </main>
      </div>
    );
  }
}
