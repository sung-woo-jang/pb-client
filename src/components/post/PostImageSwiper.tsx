import classes from './styles.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import image1 from '../../../public/assets/img/slider/02.jpg';
import * as React from 'react';

interface HeroDataType {
  id: number;
  image: StaticImageData;
}

export default function PostImageSwiper() {
  const imageArray: HeroDataType[] = [
    { id: 1, image: image1 },
    { id: 2, image: image1 },
    { id: 3, image: image1 },
    { id: 4, image: image1 },
    { id: 5, image: image1 },
    { id: 6, image: image1 },
    { id: 7, image: image1 },
    { id: 8, image: image1 },
  ];
  return (
    <div className="pt-0 p-0">
      <Swiper>
        {imageArray.map(({ image, id }) => (
          <SwiperSlide key={id} style={{ width: '100%' }}>
            <Image
              src={image}
              className={classes.timelineImage}
              alt="image not found"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
