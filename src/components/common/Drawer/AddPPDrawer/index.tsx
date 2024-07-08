import * as React from 'react';
import { useAddPPDrawer } from '@/store/slice/drawer/useDrawerController';
import CustomSwipeableDrawer from '@/components/common/Drawer/CustomSwipeableDrawer';
import classes from './styles.module.scss';
import TextArea from '@/components/common/TextArea';

export default function AddPPDrawer() {
  const { addPPDrawerToggleHandler, setAddPPDrawerHandler, addPPDrawerState } =
    useAddPPDrawer();
  return (
    <CustomSwipeableDrawer
      title="보문갈비"
      toggleHandler={addPPDrawerToggleHandler}
      drawerState={addPPDrawerState}
      setHandler={setAddPPDrawerHandler}
      buttonRender={true}
    >
      <div className={classes.wrapper}>
        <div>
          <div className="pt-0 space-y-4">
            <TextArea
              maxLength={50}
              label={'메모'}
              placeholder={'플픽에 표시될 메모를 남겨주세요.'}
            />
            <TextArea
              maxLength={25}
              label={'별명'}
              placeholder={'플픽에 표시될 별명을 남겨주세요.'}
            />
          </div>
        </div>
      </div>
    </CustomSwipeableDrawer>
  );
}
