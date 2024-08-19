import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';
import useFindUserCategories from '@/api/pl-pick-category/findUserCategories';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { CircleColors } from '@/constants/COLORS';
import CategoryItem from '@/app/place-pick/_components/PPCategory/CategoryItem';
import CategoryHeader from '@/app/place-pick/_components/PPCategory/CategoryHeader';
import usePPCategoryDetailListDrawer from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/usePPCategoryDetailListDrawer';
import useEditPPCategoryDrawer from '@/store/slice/drawer/editPPCategoryDrawer/useEditPPCategoryDrawer';

const ALL_CATEGORIES_TITLE = '전체 보기';

export default function PPCategory() {
  const { editPPCategoryDrawerToggleHandler } = useEditPPCategoryDrawer();
  const { ppCategoryDetailListDrawerToggleHandler } =
    usePPCategoryDetailListDrawer();

  const { data, isLoading, isSuccess } = useFindUserCategories();

  if (isLoading) return <LoadingSpinner size={60} />;
  if (!isSuccess) return null;
  const { data: categories } = data;

  return (
    <>
      <CategoryHeader count={categories.length + 1} />
      <CategoryItem
        color={CircleColors.GRAY}
        title={ALL_CATEGORIES_TITLE}
        onClickCategory={ppCategoryDetailListDrawerToggleHandler}
      />
      {categories.map(({ id, picker_color, title }) => (
        <CategoryItem
          key={id}
          color={picker_color}
          title={title}
          onClickCategory={ppCategoryDetailListDrawerToggleHandler}
          onClickEdit={editPPCategoryDrawerToggleHandler}
          onClickDelete={() => console.log('Delete category', id)}
        />
      ))}
      <AddCategoryButton />
    </>
  );
}
