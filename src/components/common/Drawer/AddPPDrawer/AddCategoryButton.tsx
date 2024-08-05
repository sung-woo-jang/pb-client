import styles from './styles.module.scss';
import { useAddPPCategoryDrawer } from '@/store/slice/drawer/useDrawerController';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function AddCategoryButton() {
  const { ppCategoryDrawerOpenHandler } = useAddPPCategoryDrawer();

  return (
    <div
      className={`${styles.categoryList}`}
      onClick={ppCategoryDrawerOpenHandler}
    >
      <div className="cursor-pointer">
        <AddCircleOutlineOutlinedIcon />
      </div>
      <span className="ml-2 cursor-pointer">플픽 카테고리 추가</span>
    </div>
  );
}
