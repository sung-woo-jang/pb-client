import React from 'react';
import styles from './styles.module.scss';
import CircleIcon from '@/components/Icon/CircleIcon';

interface CategoryListProps {
  title: string;
  children: React.ReactNode;
}

export default function CategoryList({ children, title }: CategoryListProps) {
  return (
    <div className={styles.box}>
      <div className={styles.categoryBox}>
        <div className={`${styles.categoryList}`}>
          <CircleIcon className="w-6 h-6" />
          <span className="ml-2">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
