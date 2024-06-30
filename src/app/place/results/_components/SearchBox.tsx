import styles from '@/app/place/results/styles.module.scss';
import SearchIcon from '@/components/Icon/SearchIcon';

export default function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <SearchIcon className={styles.searchInputIcon} />
      <input
        type="text"
        placeholder="스타벅스"
        className={styles.searchInput}
      />
    </div>
  );
}
