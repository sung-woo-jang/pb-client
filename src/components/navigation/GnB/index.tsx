'use client';

import React, { useEffect, useRef, useState } from 'react';
import classes from './styles.module.scss';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setHeaderHeight } from '@/store/slice/common/slice';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';
import useFindUserCategories from '@/api/pl-pick-category/findUserCategories';
import useGetAllCodes from '@/api/code/getAllCodes';

export default function GnB() {
  const headerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (headerRef.current)
      dispatch(setHeaderHeight(headerRef.current.scrollHeight));
  }, [dispatch]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // 스크롤 내릴 때
          setIsVisible(false);
        } else {
          // 스크롤 올릴 때
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // 클린업 함수
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useGetAllMyPlacePick();
  useFindUserCategories();
  useGetAllCodes();

  return (
    <header
      className={`${classes.header} ${isVisible ? classes.visible : classes.hidden}`}
      ref={headerRef}
    >
      <Link href={'/newsfeed'} className={classes.headerContainer}>
        <Image src={logo} alt={'logo'} width={30} height={30} />
        <span>플벗</span>
      </Link>
    </header>
  );
}
