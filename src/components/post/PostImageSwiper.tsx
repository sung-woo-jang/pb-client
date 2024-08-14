'use client';
import classes from './styles.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as React from 'react';
import { IImage } from '@/api/newsfeed/getNewsFeeds';

interface IPostImageSwiperProps {
  images: IImage[];
}

export default function PostImageSwiper({ images }: IPostImageSwiperProps) {
  // TODO 1: width, height 문제 해결하기
  // TODO 2: BASE_URL 환경별로 세팅되도록 수정
  const BASE_URL = (path: string) => 'http://localhost:8000/dummy/' + path;
  return (
    <div className="pt-0 p-0">
      <Swiper>
        {images.map(({ image_path, id }) => (
          <SwiperSlide key={id} style={{ width: '100%' }}>
            <Image
              src={BASE_URL(image_path)}
              className={classes.timelineImage}
              width={3000}
              height={3000}
              alt="image not found"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
