import React from 'react';
import styles from './styles.module.scss';
import StarsIcon from '@mui/icons-material/Stars';

interface CategoryListProps {
  id: number;
  title: string;
  color: string;
  children: React.ReactNode;
  clickHandler: (id: number) => void;
}

export default function CategoryList({
  children,
  title,
  color,
  id,
  clickHandler,
}: CategoryListProps) {
  return (
    <div className={styles.box} onClick={() => clickHandler(id)}>
      <div className={styles.categoryBox}>
        <div className={`${styles.categoryList}`}>
          <StarsIcon sx={{ color }} />
          <span className="ml-2">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
