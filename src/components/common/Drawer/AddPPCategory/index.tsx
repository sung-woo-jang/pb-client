import classes from './styles.module.scss';
import { useState } from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import COLORS, { CircleColors } from '@/constants/COLORS';
import useAddPPCategoryDrawer from '@/store/slice/drawer/addPPCategoryDrawer/useAddPPCategoryDrawer';
import useCreatePlPickCategory from '@/api/pl-pick-category/createPlPickCategory';
import AddPPCategoryForm from '@/components/common/Drawer/AddPPCategory/AddPPCategoryForm';

// button을 맨 밑에 두려면 CustomSwipeableDrawer의 밑에 button 컴포넌트를 만들면 됨
export default function AddPPCategory() {
  const [selectedCircle, setSelectedCircle] = useState<number>(1);
  const {
    addPPCategoryDrawerState,
    setPPCategoryDrawerHandler,
    ppCategoryDrawerToggleHandler,
  } = useAddPPCategoryDrawer();

  const { mutateAsync } = useCreatePlPickCategory();

  // TODO: 1순위
  const onCompleteHandler = async () => {
    await mutateAsync(
      { title: '', picker_color: CircleColors.RED, memo: '', link: '' },
      {
        onSuccess: () => {},
      }
    );
  };

  return (
    <SwipeableDrawerWrapper
      title="새 카테고리 추가"
      toggleHandler={ppCategoryDrawerToggleHandler}
      drawerState={addPPCategoryDrawerState}
      setHandler={setPPCategoryDrawerHandler}
      showActionButton={true}
      onCompleteClick={onCompleteHandler}
    >
      <AddPPCategoryForm>
        <div className={classes.pickPCContainer}>
          <label htmlFor="name" className={classes.pickPCLabel}>
            색상 선택
          </label>
          <div className={classes.iconContainer}>
            {COLORS.CIRCLE.map(({ id, color }) => (
              <div
                key={id}
                className="cursor-pointer"
                onClick={() => {
                  setSelectedCircle(id);
                }}
              >
                {selectedCircle === id ? (
                  <CheckCircleIcon sx={{ color, fontSize: '28px' }} />
                ) : (
                  <CircleIcon sx={{ color, fontSize: '28px' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </AddPPCategoryForm>
    </SwipeableDrawerWrapper>
  );
}
