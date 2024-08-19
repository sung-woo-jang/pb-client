import styles from './styles.module.scss';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import useAddPPCategoryDrawer from '@/store/slice/drawer/addPPCategoryDrawer/useAddPPCategoryDrawer';

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
