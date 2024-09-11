import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import classes from './styles.module.scss';
import { FaEdit, FaEllipsisV } from 'react-icons/fa';
import usePPCategoryDetailListDrawer from '@/store/slice/drawer/ppCategoryDetailListDrawerSlice/usePPCategoryDetailListDrawer';
import useGetCategoryWithPlacePicks from '@/api/pl-pick-category/getCategoryWithPlacePicks';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ScrollableContainer from '@/components/common/ScrollableContainer';
import Link from 'next/link';

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
      <ScrollableContainer>
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
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.videoLink}
                  >
                    {link.length > 40 ? `${link.slice(0, 40)}...` : link}
                  </Link>
                )}
                <p className={classes.address}>{place.road_address}</p>
                <button className={classes.optionsButton}>
                  <FaEllipsisV />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </ScrollableContainer>
    </SwipeableDrawerWrapper>
  );
}
