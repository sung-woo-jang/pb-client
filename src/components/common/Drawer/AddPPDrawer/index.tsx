import * as React from 'react';
import { useState } from 'react';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import TextArea from '@/components/common/TextArea';
import CategoryList from '@/components/common/Drawer/AddPPDrawer/CategoryList';
import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import useFindUserCategories from '@/api/pl-pick-category/findUserCategories';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { FaRegCheckCircle } from 'react-icons/fa';
import COLORS from '@/constants/COLORS';
import useCreatePlacePick from '@/api/place-pick/createPlacePick';
import isNumber from 'lodash/isNumber';

export default function AddPPDrawer() {
  const addPPDrawer = useAddPPDrawer();

  const { data: categories, isLoading, isSuccess } = useFindUserCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | false>(
    false
  );
  const setSelectedCategoryIdChangeHandler = (id: number) => {
    setSelectedCategoryId(selectedCategoryId === id ? false : id);
  };
  const { mutateAsync } = useCreatePlacePick();

  const createPlacePickMutateHandler = async () => {
    if (isNumber(addPPDrawer.placeId) && isNumber(selectedCategoryId))
      await mutateAsync({
        alias: addPPDrawer.alias,
        link: addPPDrawer.link,
        memo: addPPDrawer.memo,
        place_id: addPPDrawer.placeId,
        pl_pick_category_id: selectedCategoryId,
      });
    // TODO: 성공 시 아이콘 색깔 바뀌도록 수정
  };

  if (isLoading) return <LoadingSpinner size={60} />;
  else if (isSuccess) {
    return (
      <SwipeableDrawerWrapper
        title={addPPDrawer.placeTitle}
        toggleHandler={addPPDrawer.addPPDrawerToggleHandler}
        drawerState={addPPDrawer.addPPDrawerState}
        setHandler={addPPDrawer.setAddPPDrawerHandler}
        buttonRender={true}
        onCompleteClick={createPlacePickMutateHandler}
      >
        <div className={classes.wrapper}>
          <div>
            <div className="pt-0 space-y-4">
              <TextArea
                maxLength={50}
                label={'메모'}
                value={addPPDrawer.memo}
                onChange={addPPDrawer.setMemoHandler}
                placeholder={'플픽에 표시될 메모를 남겨주세요.'}
              />
              <TextArea
                maxLength={25}
                label={'별명'}
                value={addPPDrawer.alias}
                onChange={addPPDrawer.setAliasHandler}
                placeholder={'플픽에 표시될 별명을 남겨주세요.'}
              />
              <TextArea
                label={'링크'}
                placeholder={'관련 링크를 남겨주세요'}
                value={addPPDrawer.link}
                onChange={addPPDrawer.setLinkHandler}
              />
              {categories.map(({ id, title, picker_color }) => (
                <CategoryList
                  key={id}
                  title={title}
                  color={picker_color}
                  id={id}
                  clickHandler={setSelectedCategoryIdChangeHandler}
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
              <div onClick={addPPDrawer.addPPDrawerCloseHandler}>
                <AddCategoryButton />
              </div>
            </div>
          </div>
        </div>
      </SwipeableDrawerWrapper>
    );
  }
}
