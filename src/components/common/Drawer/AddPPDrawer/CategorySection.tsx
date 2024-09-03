import CategoryList from '@/components/common/Drawer/AddPPDrawer/CategoryList';
import { FaRegCheckCircle } from 'react-icons/fa';
import COLORS from '@/constants/COLORS';
import * as React from 'react';
import { IFindUserCategoriesResponseData } from '@/api/pl-pick-category/findUserCategories';
import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';

interface CategorySectionProps {
  categories: IFindUserCategoriesResponseData[];
  selectedCategoryId: number | false;
  onCategorySelect: (id: number) => void;
}

export default function CategorySection({
  onCategorySelect,
  selectedCategoryId,
  categories,
}: CategorySectionProps) {
  return (
    <>
      {categories.map(({ id, title, picker_color }) => (
        <CategoryList
          key={id}
          title={title}
          color={picker_color}
          id={id}
          clickHandler={onCategorySelect}
        >
          <button>
            <FaRegCheckCircle
              style={{
                color:
                  selectedCategoryId === id
                    ? COLORS.CHECK_CIRCLE.UN_SELECTED
                    : COLORS.CHECK_CIRCLE.SELECTED,
                fontSize: 28,
              }}
            />
          </button>
        </CategoryList>
      ))}
      <AddCategoryButton />
    </>
  );
}
