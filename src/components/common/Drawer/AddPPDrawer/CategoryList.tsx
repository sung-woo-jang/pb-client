import React from 'react';
import styles from './styles.module.scss';
import StarsIcon from '@mui/icons-material/Stars';

interface CategoryListProps {
  title: string;
  color: string;
  children: React.ReactNode;
}

export default function CategoryList({
  children,
  title,
  color,
}: CategoryListProps) {
  return (
    <div className={styles.box}>
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
