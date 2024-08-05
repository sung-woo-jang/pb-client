import styles from './styles.module.scss';
import ResultBox from '@/app/place/results/_components/ResultBox';
import LocationInfo from '@/app/place/results/_components/LocationInfo';
import SearchBox from '@/app/place/results/_components/SearchBox';

export default function Page() {
  return (
    <div className={styles.container}>
      <SearchBox />
      <LocationInfo />
      <ResultBox />
    </div>
  );
}
