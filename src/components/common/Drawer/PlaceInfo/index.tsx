import SwipeableDrawerWrapper from '@/components/common/Drawer/SwipeableDrawerWrapper';
import usePlaceInfoDrawer from '@/store/slice/drawer/placeInfoDrawer/usePlaceInfoDrawer';
import ScrollableContainer from '@/components/common/ScrollableContainer';
import classes from './styles.module.scss';
import { useAppSelector } from '@/hooks/redux-hooks';
import { FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import { useMemo } from 'react';
import AddressTooltip from '@/components/common/Tooltip/AddressTooltip';

export default function PlaceInfo() {
  const {
    placeInfoDrawerState,
    placeInfoDrawerToggleHandler,
    setPlaceInfoDrawerStateHandler,
  } = usePlaceInfoDrawer();

  const { title, address, placeCategory, road_address, telephone } =
    useAppSelector((state) => state.placeInfo.info);

  const search = useMemo(() => {
    const addressToUse = road_address.length > 0 ? road_address : address;
    return `${addressToUse.split(' ').slice(0, 2).join(' ')} ${title}`.trim();
  }, [road_address, address, title]);

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
              <div style={{ width: '100vw' }}>
                <AddressTooltip
                  roadAddress={road_address}
                  lotAddress={address}
                />
              </div>
            </div>
            {/*TODO: 추가적인 정보를 넣어서 드로어 높이 좀 올려야 함*/}
            {telephone && (
              <div className={classes.telephone}>
                <FaPhoneAlt className={classes.icon} />
                <span>{telephone}</span>
              </div>
            )}
          </div>
          {/*TODO: 네이버 지도로 탭 전환*/}
          <Link
            href={`https://map.naver.com/p/search/${search}`}
            target="_blank"
          >
            <button className={classes.directionButton}>길찾기</button>
          </Link>
        </div>
      </ScrollableContainer>
    </SwipeableDrawerWrapper>
  );
}
