'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';
import classes from './styles.module.scss';
import { MenuIcon, SquareIcon } from '@/components/Icon';
import Link from 'next/link';

export default function GnB() {
  const isOpenInfoSidebar = useAppSelector(
    (state) => state.common.isOpenInfoSidebar
  );
  const dispatch = useAppDispatch();
  const toggleInfoSidebarHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch(setIsOpenInfoSidebar(!isOpenInfoSidebar));
    event.stopPropagation();
  };

  return (
    <header className={classes.header}>
      <Link href={'/'} className={classes.headerContainer}>
        <SquareIcon className={classes.logo} />
        <span>플벗</span>
      </Link>
      <MenuIcon
        className={classes.hamburger}
        onClick={toggleInfoSidebarHandler}
      />
    </header>
  );
}
