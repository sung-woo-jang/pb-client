import styles from './styles.module.scss';
import useAddPPCategoryDrawer from '@/store/slice/drawer/addPPCategoryDrawer/useAddPPCategoryDrawer';
import { IoIosAddCircleOutline } from 'react-icons/io';

export default function AddCategoryButton() {
  const { ppCategoryDrawerOpenHandler } = useAddPPCategoryDrawer();

  return (
    <div
      className={`${styles.categoryList}`}
      onClick={ppCategoryDrawerOpenHandler}
    >
      <div className="cursor-pointer">
        <IoIosAddCircleOutline style={{ width: '1.4rem', height: '1.4rem' }} />
      </div>
      <span className="ml-2 cursor-pointer">플픽 카테고리 추가</span>
    </div>
  );
}
