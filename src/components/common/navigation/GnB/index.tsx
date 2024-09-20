'use client';

import React, { useEffect, useRef } from 'react';
import classes from './styles.module.scss';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setHeaderHeight } from '@/store/slice/common/slice';
import Image from 'next/image';
import logo from '../../../../../public/logo.png';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';

export default function GnB() {
  const headerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (headerRef.current)
      dispatch(setHeaderHeight(headerRef.current.scrollHeight));
  }, [dispatch]);
  useGetAllMyPlacePick();
  return (
    <header className={classes.header} ref={headerRef}>
      <Link href={'/public'} className={classes.headerContainer}>
        <Image src={logo} alt={'logo'} width={30} height={30} />
        <span>플벗</span>
      </Link>
    </header>
  );
}
