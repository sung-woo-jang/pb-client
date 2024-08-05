import * as React from 'react';
import { useState } from 'react';
import { useAddPPDrawer } from '@/store/slice/drawer/useDrawerController';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import TextArea from '@/components/common/TextArea';
import CategoryList from '@/components/common/Drawer/AddPPDrawer/CategoryList';
import AddCategoryButton from '@/components/common/Drawer/AddPPDrawer/AddCategoryButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function AddPPDrawer() {
  const {
    addPPDrawerToggleHandler,
    setAddPPDrawerHandler,
    addPPDrawerState,
    addPPDrawerCloseHandler,
  } = useAddPPDrawer();

  const [categories, setCategories] = useState([
    { id: 2, title: '맛집', checked: false, color: '#FF596D' },
    { id: 3, title: '술집', checked: false, color: '#FE8803' },
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
            {categories.map(({ id, title, checked, color }) => (
              <CategoryList key={id} title={title} color={color}>
                <button
                  onClick={() => {
                    checkedChangeHandler(id);
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      color: checked ? '#1FFF11' : '#BBC3CF',
                      fontSize: 28,
                    }}
                  />
                </button>
              </CategoryList>
            ))}
            <div onClick={addPPDrawerCloseHandler}>
              <AddCategoryButton />
            </div>
          </div>
        </div>
      </div>
    </SwipeableDrawerWrapper>
  );
}
