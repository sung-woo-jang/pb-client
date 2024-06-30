import styles from './styles.module.scss';
import SearchBox from '@/app/place/results/_components/SearchBox';
import ResultBox from '@/app/place/results/_components/ResultBox';
import LocationInfo from '@/app/place/results/_components/LocationInfo';

export default function Page() {
  return (
    <div className={styles.container}>
      <SearchBox />

      <LocationInfo />
      <ResultBox />
    </div>
  );
}
