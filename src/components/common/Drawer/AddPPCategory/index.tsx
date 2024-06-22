import classes from './styles.module.scss';
import { useState } from 'react';
import CustomSwipeableDrawer from '@/components/common/Drawer/CustomSwipeableDrawer';
import { useAddPPCategoryDrawer } from '@/store/slice/drawer/useDrawerController';
import CheckIcon from '@mui/icons-material/Check';

const CircleData = [
  { id: 1, color: 'bg-green-500' },
  { id: 2, color: 'bg-orange-500' },
  { id: 3, color: 'bg-yellow-500' },
  { id: 4, color: 'bg-green-500' },
  { id: 5, color: 'bg-teal-500' },
  { id: 6, color: 'bg-blue-500' },
  { id: 7, color: 'bg-purple-500' },
  { id: 8, color: 'bg-pink-500' },
];

// button을 맨 밑에 두려면 CustomSwipeableDrawer의 밑에 button 컴포넌트를 만들면 됨
export default function AddPPCategory() {
  const [selectedCircle, setSelectedCircle] = useState<number>(1);
  const {
    addPPCategoryState,
    setPPCategoryDrawerHandler,
    ppCategoryDrawerToggleHandler,
  } = useAddPPCategoryDrawer();
  return (
    <CustomSwipeableDrawer
      title="새 카테고리 추가"
      toggleHandler={ppCategoryDrawerToggleHandler}
      drawerState={addPPCategoryState}
      setHandler={setPPCategoryDrawerHandler}
      buttonRender={true}
    >
      <div className={classes.wrapper}>
        <div className="mt-4">
          <div className={classes.inputContainer}>
            <label htmlFor="name" className={`${classes.label} mb-2`}>
              새 카테고리명
            </label>
            <span className="text-sm text-gray-500">0/25</span>
          </div>
          <input
            id="name"
            type="text"
            placeholder="새 카테고리명을 입력해주세요."
            className={classes.input}
          />
        </div>
        <div className={classes.pickPCContainer}>
          <label htmlFor="name" className={classes.pickPCLabel}>
            색상 선택
          </label>
          <div className={classes.iconContainer}>
            {CircleData.map(({ id, color }) => (
              <div
                key={id}
                className={`${classes.colorCircle} ${color}`}
                onClick={() => {
                  setSelectedCircle(id);
                }}
              >
                {selectedCircle === id && <CheckIcon className="h-4 w-4" />}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className={classes.inputContainer}>
            <label htmlFor="name" className={classes.label}>
              메모
            </label>
            <span className="text-sm text-gray-500">0/25</span>
          </div>
          <input
            id="name"
            type="text"
            placeholder="메모를 남겨주세요"
            className={classes.input}
          />
        </div>
        <div className="mt-4">
          <div className={classes.inputContainer}>
            <label htmlFor="description" className={classes.label}>
              관련 링크
            </label>
            <span className="text-sm text-gray-500">0/25</span>
          </div>
          <input
            id="description"
            type="text"
            placeholder="https://"
            className={classes.input}
          />
        </div>
      </div>
    </CustomSwipeableDrawer>
  );
}
