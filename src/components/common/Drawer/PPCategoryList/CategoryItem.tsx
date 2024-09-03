import styles from './styles.module.scss';
import { MdDeleteOutline, MdOutlineCreate, MdStars } from 'react-icons/md';

interface ICategoryItemProps {
  color: string;
  title: string;
  onClickCategory: () => void;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
}

export default function CategoryItem({
  color,
  title,
  onClickCategory,
  onClickEdit,
  onClickDelete,
}: ICategoryItemProps) {
  return (
    <div className={styles.box}>
      <div className={styles.categoryBox}>
        <div className={styles.categoryList} onClick={onClickCategory}>
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
