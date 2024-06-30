'use client';

import React from 'react';
import classes from './styles.module.scss';
import Link from 'next/link';
import { useSidebarControls } from '@/store/slice/common/useSidebarControls';
import MenuIcon from '@/components/Icon/MenuIcon';
import SquareIcon from '@/components/Icon/SquareIcon';

export default function GnB() {
  const { toggleInfoSidebar } = useSidebarControls();

  const toggleInfoSidebarHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    toggleInfoSidebar();
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
