'use client';

import classes from './styles.module.scss';

import Image from 'next/image';
import blogImage1 from './../../../public/assets/img/blog/01.jpg';
import blogImage2 from './../../../public/assets/img/blog/001.jpg';
import blogImage3 from './../../../public/assets/img/blog/author.png';
import blogImage4 from './../../../public/assets/img/blog/b-01.jpg';
import blogImage5 from './../../../public/assets/img/blog/banner.jpg';
import blogImage6 from './../../../public/assets/img/blog/comments1.png';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const arrowClass = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  zIndex: 100,
  color: 'white',
  fontSize: '3rem',
};

export default function TimelineImageContainer() {
  const [imageArray, setImageArray] = useState([
    { key: 1, display: false, path: blogImage1 },
    { key: 2, display: false, path: blogImage2 },
    { key: 3, display: false, path: blogImage3 },
    { key: 4, display: false, path: blogImage4 },
    { key: 5, display: false, path: blogImage5 },
    { key: 6, display: false, path: blogImage6 },
  ]);
  const [popupToggle, setPopupToggle] = useState<boolean>(false);

  const displayImagePopupHandler = (index: number) => {
    setSelectIndex(index);
    setPopupToggle(true);
    const newArray = imageArray.map(({ display, ...rest }, idx) =>
      idx === index ? { display: !display, ...rest } : { display, ...rest }
    );
    setImageArray(newArray);
  };
  const closeImagePopupHandler = () => {
    setPopupToggle(false);
    const newArray = imageArray.map(({ ...rest }) => ({ ...rest, display: false }));
    setImageArray(newArray);
  };

  const [selectIndex, setSelectIndex] = useState<number>(0);
  const selectIndexChangeHandler = (direction: 'right' | 'left') => {
    setSelectIndex((prevIndex) => {
      const lastIndex = imageArray.length - 1;
      if (direction === 'left') {
        return prevIndex === 0 ? lastIndex : prevIndex - 1;
      } else {
        return prevIndex === lastIndex ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Image Gallery</h1>

      <div className={classes.imageContainer}>
        {imageArray.map(({ key, path }, index) => (
          <div key={key} className={classes.image}>
            <Image src={path} width={350} height={250} alt={`${key}`} onClick={() => displayImagePopupHandler(index)} />
          </div>
        ))}
      </div>
      <div className={classes.popupImage} style={{ display: popupToggle ? 'block' : 'none' }}>
        <span onClick={closeImagePopupHandler}>&times;</span>
        {/* https://nextjs.org/docs/app/building-your-application/optimizing/images => Remote Images
  Image 컴포넌트 사용법 익히고 수정 */}
        <ArrowBackIosNewIcon
          sx={{
            ...arrowClass,
            left: '20px',
          }}
          onClick={() => selectIndexChangeHandler('left')}
        />
        <Image src={imageArray[selectIndex].path} alt={`${1}`} />
        <ArrowForwardIosIcon
          onClick={() => selectIndexChangeHandler('right')}
          sx={{
            ...arrowClass,
            right: '20px',
          }}
        />
      </div>
    </div>
  );
}
