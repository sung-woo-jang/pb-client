import usePPCategoryList from '@/store/slice/drawer/ppCategoryList/usePPCategoryList';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import useEditPPCategoryDrawer from '@/store/slice/drawer/editPPCategoryDrawer/useEditPPCategoryDrawer';
import { IFindUserCategoriesResponseData } from '@/api/pl-pick-category/findUserCategories';
import CategoryHeader from '@/components/common/Drawer/PPCategoryList/CategoryHeader';
import CategoryItem from '@/components/common/Drawer/PPCategoryList/CategoryItem';
import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';
import ScrollableContainer from '@/components/common/ScrollableContainer';
import { useQueryClient } from '@tanstack/react-query';
import { CommonResponse } from '@/types/apiTypes';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import isNil from 'lodash/isNil';

export default function PPCategoryList() {
  const queryClient = useQueryClient();

  const categories = queryClient.getQueryData<
    CommonResponse<IFindUserCategoriesResponseData[]>
  >(
    generateQueryKeysFromUrl(API_URL.PL_PICK_CATEGORY.FIND_USER_CATEGORIES)
  )?.data;

  const { drawerState, toggleDrawerHandler, drawerStateChangeHandler } =
    usePPCategoryList();
  const { editPPCategoryDrawerToggleHandler } = useEditPPCategoryDrawer();

  if (!isNil(categories)) {
    return (
      <SwipeableDrawerWrapper
        title={'플픽 카테고리 리스트'}
        toggleHandler={toggleDrawerHandler}
        drawerState={drawerState}
        setHandler={drawerStateChangeHandler}
      >
        <ScrollableContainer>
          <CategoryHeader count={categories.length + 1} />
          {/*TODO: <CategoryItem color={CircleColors.GRAY} title={'전체 보기'} />*/}
          {categories.map(({ id, picker_color, title }) => (
            <CategoryItem
              key={id}
              id={id}
              color={picker_color}
              title={title}
              onClickEdit={editPPCategoryDrawerToggleHandler}
              onClickDelete={() => console.log('Delete category', id)}
            />
          ))}
          <AddCategoryButton />
        </ScrollableContainer>
      </SwipeableDrawerWrapper>
    );
  }
}
