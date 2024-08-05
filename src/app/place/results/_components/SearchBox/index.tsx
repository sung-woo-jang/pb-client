'use client';
import styles from './styles.module.scss';
import SearchIcon from '@/components/Icon/SearchIcon';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import { arrowBackIosIconStyle } from '@/app/place/results/_components/SearchBox/styles';

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
      <ArrowBackIosIcon sx={arrowBackIosIconStyle} onClick={handleBlur} />
      <input
        type="text"
        placeholder="스타벅스"
        onFocus={handleFocus}
        className={styles.searchInput}
      />
      <SearchIcon className={styles.searchInputIcon} />
    </div>
  );
}
