import classes from './styles.module.scss';
import { useState } from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import TextArea from '@/components/common/TextArea';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import COLORS from '@/constants/COLORS';
import useAddPPCategoryDrawer from '@/store/slice/drawer/addPPCategoryDrawer/useAddPPCategoryDrawer';

// button을 맨 밑에 두려면 CustomSwipeableDrawer의 밑에 button 컴포넌트를 만들면 됨
export default function AddPPCategory() {
  const [selectedCircle, setSelectedCircle] = useState<number>(1);
  const {
    addPPCategoryDrawerState,
    setPPCategoryDrawerHandler,
    ppCategoryDrawerToggleHandler,
  } = useAddPPCategoryDrawer();

  return (
    <SwipeableDrawerWrapper
      title="새 카테고리 추가"
      toggleHandler={ppCategoryDrawerToggleHandler}
      drawerState={addPPCategoryDrawerState}
      setHandler={setPPCategoryDrawerHandler}
      showActionButton={true}
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
