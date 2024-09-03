import styles from './styles.module.scss';
import { MdOutlineStarBorder } from 'react-icons/md';

export default function CategoryHeader({ count }: { count: number }) {
  return (
    <div className={styles.box}>
      <div className={styles.categoryList}>
        <MdOutlineStarBorder className="w-6 h-6 text-purple-500" />
        <span>&nbsp; 플픽 카테고리 {count}</span>
      </div>
    </div>
  );
}
