import styles from './styles.module.scss';
import { MdDeleteOutline, MdOutlineCreate, MdStars } from 'react-icons/md';
import usePPCategoryDetailListDrawer from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/usePPCategoryDetailListDrawer';

interface ICategoryItemProps {
  color: string;
  title: string;
  id: number;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
}

export default function CategoryItem({
  color,
  title,
  id,
  onClickEdit,
  onClickDelete,
}: ICategoryItemProps) {
  const { ppCategoryDetailListDrawerToggleHandler, setPPCategoryIdHandler } =
    usePPCategoryDetailListDrawer();
  const categoryItemClickHandler = () => {
    setPPCategoryIdHandler(id);
    ppCategoryDetailListDrawerToggleHandler();
  };
  return (
    <div className={styles.box}>
      <div className={styles.categoryBox}>
        <div className={styles.categoryList} onClick={categoryItemClickHandler}>
          <MdStars style={{ color }} />
          <span className="ml-2">{title}</span>
        </div>
        {onClickEdit && onClickDelete && (
          <div className={`${styles.categoryList} space-x-2`}>
            <MdOutlineCreate onClick={onClickEdit} />
            <MdDeleteOutline onClick={onClickDelete} />
          </div>
        )}
      </div>
    </div>
  );
}
