'use client';
import styles from './../styles.module.scss';
import SearchIcon from '@/components/Icon/SearchIcon';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';

export default function SearchBox() {
  const { setIsFocusedState } = useSearchBoxControls();
  const handleFocus = () => {
    setIsFocusedState(true);
  };

  const handleBlur = () => {
    setIsFocusedState(false);
  };
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="스타벅스"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.searchInput}
      />
      <SearchIcon className={styles.searchInputIcon} />
    </div>
  );
}
