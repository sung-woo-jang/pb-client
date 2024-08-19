import classes from './styles.module.scss';
import { useState } from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import CheckIcon from '@mui/icons-material/Check';
import TextArea from '@/components/common/TextArea';
import useEditPPCategoryDrawer from '@/store/slice/drawer/editPPCategoryDrawer/useEditPPCategoryDrawer';

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
export default function EditPPCategory() {
  const [selectedCircle, setSelectedCircle] = useState<number>(1);
  const {
    editPPCategoryDrawerState,
    setEditPPCategoryDrawerHandler,
    editPPCategoryDrawerToggleHandler,
  } = useEditPPCategoryDrawer();
  return (
    <SwipeableDrawerWrapper
      title="새 카테고리 수정"
      toggleHandler={editPPCategoryDrawerToggleHandler}
      drawerState={editPPCategoryDrawerState}
      setHandler={setEditPPCategoryDrawerHandler}
      buttonRender={true}
    >
      <div className={classes.wrapper}>
        <TextArea
          label={'새 카테고리명'}
          maxLength={25}
          placeholder={'새 카테고리명을 입력해주세요.'}
        />

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
        <TextArea
          label={'메모'}
          maxLength={25}
          placeholder={'메모를 남겨주세요.'}
        />
        <TextArea
          label={'관련 링크'}
          maxLength={25}
          placeholder={'https://.'}
        />
      </div>
    </SwipeableDrawerWrapper>
  );
}
