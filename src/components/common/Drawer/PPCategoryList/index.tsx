import usePPCategoryList from '@/store/slice/drawer/ppCategoryList/usePPCategoryList';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';

export default function PPCategoryList() {
  const { drawerState, toggleDrawerHandler, drawerStateChangeHandler } =
    usePPCategoryList();
  return (
    <SwipeableDrawerWrapper
      title={'플픽 카테고리 리스트'}
      toggleHandler={toggleDrawerHandler}
      drawerState={drawerState}
      setHandler={drawerStateChangeHandler}
    >
      <div></div>
    </SwipeableDrawerWrapper>
  );
}
