import React from 'react';
import styles from './styles.module.scss';
import StarsIcon from '@mui/icons-material/Stars';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';

interface CategoryListProps {
  id: number;
  title: string;
  color: string;
  children: React.ReactNode;
}

export default function CategoryList({
  children,
  title,
  color,
  id,
}: CategoryListProps) {
  const { setSelectedCategoryIdHandler, selectedCategoryId } = useAddPPDrawer();

  return (
    <div
      className={styles.box}
      onClick={() => {
        setSelectedCategoryIdHandler(selectedCategoryId === id ? 0 : id);
      }}
    >
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
