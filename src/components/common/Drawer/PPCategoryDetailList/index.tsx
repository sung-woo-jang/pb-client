import { usePPCategoryDetailListDrawer } from '@/store/slice/drawer/useDrawerController';
import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import { FaEdit, FaEllipsisV } from 'react-icons/fa';

interface PlaceState {
  id: number;
  alias: string | null;
  name: string | null;
  category: string | null;
  memo: string | null;
  videoLink: string | null;
  address: string | null;
}

const places: PlaceState[] = [
  {
    id: 1,
    alias: '',
    name: '맛집 1',
    category: '일식집',
    memo: '진짜 맛있는 집',
    videoLink: 'https://www.youtube.com/watch?v=d7Yf6kxp9XM',
    address: '서울특별시 강남구 강남대로 98길 12-5 (역삼동)',
  },
  {
    id: 2,
    alias: '',
    name: '맛집 2',
    category: '장소 카테고리',
    memo: '메모할 내용',
    address: '서울특별시 강남구 강남대로 98길 12-5 (역삼동)',
    videoLink: '',
  },
  {
    id: 3,
    alias: '',
    memo: '',
    category: '',
    videoLink: '',
    name: '맛집 3',
    address: '서울특별시 강남구 강남대로 98길 12-5 (역삼동)',
  },
];

export default function PPCategoryDetailList() {
  const {
    ppCategoryDetailListDrawerState,
    ppCategoryDetailListDrawerToggleHandler,
    setPPCategoryDetailListDrawerHandler,
  } = usePPCategoryDetailListDrawer();
  return (
    <SwipeableDrawerWrapper
      title="카테고리 이름"
      toggleHandler={ppCategoryDetailListDrawerToggleHandler}
      drawerState={ppCategoryDetailListDrawerState}
      setHandler={setPPCategoryDetailListDrawerHandler}
      buttonRender={true}
    >
      <div className={classes.wrapper}>
        <button className={classes.editButton}>
          <FaEdit className={classes.icon} /> 편집
        </button>
        <ul className={classes.list}>
          {places.map((place) => (
            <li key={place.id} className={classes.listItem}>
              <h3 className={classes.name}>{place.name}</h3>
              <p className={classes.category}>{place.category}</p>
              {place.memo && <p className={classes.memo}>{place.memo}</p>}
              {place.videoLink && (
                <a
                  href={place.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.videoLink}
                >
                  {place.videoLink}
                </a>
              )}
              <p className={classes.address}>{place.address}</p>
              <button className={classes.optionsButton}>
                <FaEllipsisV />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </SwipeableDrawerWrapper>
  );
}
