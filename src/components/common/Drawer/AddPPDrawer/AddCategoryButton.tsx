import styles from './styles.module.scss';
import {
  useAddPPCategoryDrawer,
  useAddPPDrawer,
} from '@/store/slice/drawer/useDrawerController';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function AddCategoryButton() {
  const { ppCategoryDrawerOpenHandler } = useAddPPCategoryDrawer();
  const { setAddPPDrawerHandler } = useAddPPDrawer();
  const addPPCategoryHandler = () => {
    setAddPPDrawerHandler(false);
    ppCategoryDrawerOpenHandler();
  };
  return (
    <div className="p-2">
      <div className={`${styles.categoryList}`}>
        <div className="cursor-pointer">
          <AddCircleOutlineOutlinedIcon onClick={ppCategoryDrawerOpenHandler} />
        </div>
        <span className="ml-2 cursor-pointer" onClick={addPPCategoryHandler}>
          플픽 카테고리 추가
        </span>
      </div>
    </div>
  );
}
