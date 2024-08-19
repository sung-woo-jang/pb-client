import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import { FaEdit, FaEllipsisV } from 'react-icons/fa';
import usePPCategoryDetailListDrawer from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/usePPCategoryDetailListDrawer';
import useGetCategoryWithPlacePicks from '@/api/pl-pick-category/getCategoryWithPlacePicks';
import LoadingSpinner from '@/components/common/LoadingSpinner';

export default function PPCategoryDetailList() {
  const {
    ppCategoryId,
    ppCategoryDetailListDrawerState,
    ppCategoryDetailListDrawerToggleHandler,
    setPPCategoryDetailListDrawerHandler,
  } = usePPCategoryDetailListDrawer();
  const { data, isSuccess, isLoading } = useGetCategoryWithPlacePicks(
    ppCategoryId,
    ppCategoryDetailListDrawerState
  );
  if (isLoading) return <LoadingSpinner size={60} />;
  if (!isSuccess) return null;
  const { data: categoryWithPlacePicks } = data;
  const { placePicks, title } = categoryWithPlacePicks;
  return (
    <SwipeableDrawerWrapper
      title={title}
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
          {placePicks.map(({ place_id, place, memo, link }) => (
            <li key={place_id} className={classes.listItem}>
              <h3 className={classes.name}>{place.title}</h3>
              <p className={classes.category}>
                {place.placeCategory.place_category_name_detail}
              </p>
              {memo && <p className={classes.memo}>{memo}</p>}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.videoLink}
                >
                  {link}
                </a>
              )}
              <p className={classes.address}>{place.road_address}</p>
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
