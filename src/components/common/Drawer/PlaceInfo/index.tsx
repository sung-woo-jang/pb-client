import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import usePlaceInfoDrawer from '@/store/slice/drawer/placeInfoDrawer/usePlaceInfoDrawer';
import ScrollableContainer from '@/components/common/ScrollableContainer';
import classes from './styles.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function PlaceInfo() {
  const {
    placeInfoDrawerState,
    placeInfoDrawerToggleHandler,
    setPlaceInfoDrawerStateHandler,
  } = usePlaceInfoDrawer();
  const { title, address, placeCategory, road_address, telephone } =
    useAppSelector((state) => state.placeInfo.info);
  return (
    <SwipeableDrawerWrapper
      showActionButton={false}
      showHeader={false}
      drawerState={placeInfoDrawerState}
      setHandler={setPlaceInfoDrawerStateHandler}
      toggleHandler={placeInfoDrawerToggleHandler}
    >
      <ScrollableContainer>
        <div className={classes.wrapper}>
          <div className={classes.header}>
            <h1 className={classes.title}>{title}</h1>
            <span className={classes.category}>
              {placeCategory.place_category_name}{' '}
              {placeCategory.place_category_name_detail}
            </span>
          </div>

          <div className={classes.infoContainer}>
            <div className={classes.addressContainer}>
              <MdLocationOn className={classes.icon} />
              <div>
                <div>{address}</div>
                <div className={classes.roadAddress}>{road_address}</div>
              </div>
            </div>
            {telephone && (
              <div className={classes.telephone}>
                <FaPhoneAlt className={classes.icon} />
                <span>{telephone}</span>
              </div>
            )}
          </div>
          {/*TODO: 네이버 지도로 탭 전환*/}
          <button className={classes.directionButton}>길찾기</button>
        </div>
      </ScrollableContainer>
    </SwipeableDrawerWrapper>
  );
}
