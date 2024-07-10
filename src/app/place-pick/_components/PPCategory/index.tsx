import styles from './styles.module.scss';
import { useState } from 'react';
import CircleIcon from '@/components/Icon/CircleIcon';
import CirclePlusIcon from '@/components/Icon/CirclePlusIcon';
import FilePenIcon from '@/components/Icon/FilePenIcon';
import StarIcon from '@/components/Icon/StarIcon';
import TrashIcon from '@/components/Icon/TrashIcon';
import { useEditPPCategoryDrawer } from '@/store/slice/drawer/useDrawerController';

export default function PPCategory() {
  const [categories] = useState([
    { id: 1, title: '전체 보기', isDefault: true },
    { id: 2, title: '맛집', isDefault: false },
    { id: 3, title: '술집', isDefault: false },
  ]);
  const { editPPCategoryDrawerToggleHandler } = useEditPPCategoryDrawer();
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
      {categories.map(({ id, isDefault, title }) => (
        <div key={id} className={styles.box}>
          <div className={styles.categoryBox}>
            <div className={`${styles.categoryList}`}>
              <CircleIcon className="w-6 h-6" />
              <span className="ml-2">{title}</span>
            </div>
            {!isDefault && (
              <div className={`${styles.categoryList} space-x-2`}>
                <FilePenIcon
                  className="w-6 h-6"
                  onClick={editPPCategoryDrawerToggleHandler}
                />
                <TrashIcon className="w-6 h-6" />
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="p-2">
        <div className={styles.categoryList}>
          <CirclePlusIcon className="w-6 h-6" />
          <span className="ml-2">플픽 카테고리 추가</span>
        </div>
      </div>
    </>
  );
}
