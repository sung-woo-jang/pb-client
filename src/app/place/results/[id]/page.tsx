'use client';
import classes from './styles.module.scss';
import PSResultImageContainer from '@/app/place/results/[id]/_component/PSResultImageContainer';
import PsResultDescription from '@/app/place/results/[id]/_component/PSResultDescription';
import PsResultReview from '@/app/place/results/[id]/_component/PSResultReview';
import Separator from '@/components/common/Separator';

export default function Page() {
  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>
        <div style={{ backgroundColor: 'white' }}>
          <PSResultImageContainer />
          <PsResultDescription />
          <h3 className="text-lg font-bold mb-2">팔로워 리뷰 · 27</h3>
          <Separator />
          <PsResultReview />
        </div>
      </main>
    </div>
  );
}
