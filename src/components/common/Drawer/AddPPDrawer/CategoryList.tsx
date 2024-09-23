import styles from './styles.module.scss';
import StarsIcon from '@mui/icons-material/Stars';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import { ReactNode } from 'react';

interface CategoryListProps {
  id: number;
  title: string;
  color: string;
  children: ReactNode;
}

export default function CategoryList({
  children,
  title,
  color,
  id,
}: CategoryListProps) {
  const { toggleSelectedCategoryIdHandler } = useAddPPDrawer();

  return (
    <div
      className={styles.box}
      onClick={() => {
        toggleSelectedCategoryIdHandler(id);
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
