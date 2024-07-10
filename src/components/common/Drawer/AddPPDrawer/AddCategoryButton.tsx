import styles from './styles.module.scss';
import CirclePlusIcon from '@/components/Icon/CirclePlusIcon';
import { useAddPPCategoryDrawer } from '@/store/slice/drawer/useDrawerController';

export default function AddCategoryButton() {
  const { ppCategoryDrawerOpenHandler } = useAddPPCategoryDrawer();
  return (
    <div className="p-2">
      <div className={`${styles.categoryList}`}>
        <CirclePlusIcon
          className="w-6 h-6 cursor-pointer"
          onClick={ppCategoryDrawerOpenHandler}
        />
        <span
          className="ml-2 cursor-pointer"
          onClick={ppCategoryDrawerOpenHandler}
        >
          플픽 카테고리 추가
        </span>
      </div>
    </div>
  );
}
