'use client';

import React, { useEffect, useRef } from 'react';
import classes from './styles.module.scss';
import Link from 'next/link';
import { useSidebarControls } from '@/store/slice/common/useSidebarControls';
import MenuIcon from '@/components/Icon/MenuIcon';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setHeaderHeight } from '@/store/slice/common/slice';
import Image from 'next/image';

export default function GnB() {
  const { toggleInfoSidebar } = useSidebarControls();
  const headerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (headerRef.current)
      dispatch(setHeaderHeight(headerRef.current.scrollHeight));
  }, [dispatch]);
  const toggleInfoSidebarHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    toggleInfoSidebar();
    event.stopPropagation();
  };

  return (
    <header className={classes.header} ref={headerRef}>
      <Link href={'/'} className={classes.headerContainer}>
        <Image src={'/logo.png'} alt={'logo'} width={30} height={30} />
        <span>플벗</span>
      </Link>
      <MenuIcon
        className={classes.hamburger}
        onClick={toggleInfoSidebarHandler}
      />
    </header>
  );
}
