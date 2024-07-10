import * as React from 'react';
import { useState } from 'react';
import { useAddPPDrawer } from '@/store/slice/drawer/useDrawerController';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import TextArea from '@/components/common/TextArea';
import CheckCircleIcon from '@/components/Icon/CheckCircleIcon';
import CategoryList from '@/components/common/Drawer/AddPPDrawer/CategoryList';
import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';

export default function AddPPDrawer() {
  const { addPPDrawerToggleHandler, setAddPPDrawerHandler, addPPDrawerState } =
    useAddPPDrawer();

  const [categories, setCategories] = useState([
    { id: 2, title: '맛집', checked: false },
    { id: 3, title: '술집', checked: false },
  ]);

  const checkedChangeHandler = (id: number) => {
    setCategories((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, checked: true }
          : { ...item, checked: false }
      )
    );
  };

  return (
    <SwipeableDrawerWrapper
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
            {categories.map(({ id, title, checked }) => (
              <CategoryList key={id} title={title}>
                <button
                  onClick={() => {
                    checkedChangeHandler(id);
                  }}
                >
                  <CheckCircleIcon isChecked={checked} />
                </button>
              </CategoryList>
            ))}
            <AddCategoryButton />
          </div>
        </div>
      </div>
    </SwipeableDrawerWrapper>
  );
}
