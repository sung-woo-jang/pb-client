import styles from './styles.module.scss';
import React, { useState } from 'react';
import StarIcon from '@/components/Icon/StarIcon';
import {
  useEditPPCategoryDrawer,
  usePPCategoryDetailListDrawer,
} from '@/store/slice/drawer/useDrawerController';
import StarsIcon from '@mui/icons-material/Stars';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';

export default function PPCategory() {
  const [categories] = useState([
    { id: 1, title: '전체 보기', color: '#767676', isDefault: true },
    { id: 2, title: '맛집', color: '#FF596D', isDefault: false },
    { id: 3, title: '술집', color: '#FE8803', isDefault: false },
  ]);
  const { editPPCategoryDrawerToggleHandler } = useEditPPCategoryDrawer();
  const { ppCategoryDetailListDrawerToggleHandler } =
    usePPCategoryDetailListDrawer();

  return (
    <>
      <div className={styles.box}>
        <div className={styles.categoryList}>
          <StarIcon className="w-6 h-6 text-purple-500" />
          <span className="ml-2">내 주변 플픽</span>
        </div>
      </div>
      <div className={styles.box}>
        <span>플픽 카테고리 2</span>
      </div>
      {categories.map(({ id, color, isDefault, title }) => (
        <div key={id} className={styles.box}>
          <div className={styles.categoryBox}>
            <div
              className={`${styles.categoryList}`}
              onClick={ppCategoryDetailListDrawerToggleHandler}
            >
              <StarsIcon sx={{ color }} />
              <span className="ml-2">{title}</span>
            </div>
            {!isDefault && (
              <div className={`${styles.categoryList} space-x-2`}>
                <CreateOutlinedIcon
                  onClick={editPPCategoryDrawerToggleHandler}
                />
                <DeleteOutlineIcon />
              </div>
            )}
          </div>
        </div>
      ))}
      <AddCategoryButton />
    </>
  );
}
