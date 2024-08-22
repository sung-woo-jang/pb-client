import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import styles from './styles.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

interface SearchListProps {
  searchHistory: string[];
  handleRemoveItem: (itemToRemove: string) => void;
  handleClearAll: () => void; // 전체 삭제를 위한 핸들러 추가
}

function SearchList({
  searchHistory,
  handleRemoveItem,
  handleClearAll,
}: SearchListProps) {
  return (
    <>
      <div className={styles.searchHistory}>
        {searchHistory.map((item) => (
          <div key={item} className={styles.searchHistoryItem}>
            <span className={styles.searchHistoryText}>{item}</span>
            <CloseIcon
              className={styles.searchHistoryIcon}
              onClick={() => handleRemoveItem(item)}
            />
          </div>
        ))}
      </div>
      <div className="relative">
        <button className={styles.clearAllButton} onClick={handleClearAll}>
          전체삭제
        </button>
      </div>
    </>
  );
}

function EmptySearchHistory() {
  return (
    <div className={styles.emptyStateContainer}>
      <BiotechOutlinedIcon sx={{ width: '12rem', height: '12rem' }} />
      <p className="mt-4 text-gray-400">최근 검색 기록이 없습니다.</p>
    </div>
  );
}

export default function SearchHistory() {
  const [searchHistory, setSearchHistory] = useState([
    '스타벅스',
    '맥도날드',
    '버거킹',
    '롯데리아',
    '서브웨이',
    '투썸플레이스',
    '이디야',
    '메가커피',
    '조마루감자탕',
    '장충동왕족발보쌈',
    '국민낙곱새',
    '전설낙곱새',
    '빽다방',
    '모두동',
    '핵밥',
    '오쭈',
    '스타벅스2',
    '맥도날드2',
    '버거킹2',
    '롯데리아2',
    '서브웨이2',
    '투썸플레이스2',
    '이디야2',
    '메가커피2',
    '조마루감자탕2',
    '장충동왕족발보쌈2',
    '국민낙곱새2',
    '전설낙곱새2',
    '빽다방2',
    '모두동2',
    '핵밥2',
    '오쭈2',
  ]);
  const handleRemoveItem = (itemToRemove: string) => {
    setSearchHistory((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const handleClearAll = () => {
    setSearchHistory([]);
  };

  return (
    <div className="relative w-full h-screen">
      {searchHistory.length > 0 ? (
        <div className={styles.searchHistoryContainer}>
          <SearchList
            searchHistory={searchHistory}
            handleRemoveItem={handleRemoveItem}
            handleClearAll={handleClearAll}
          />
        </div>
      ) : (
        <EmptySearchHistory />
      )}
    </div>
  );
}
