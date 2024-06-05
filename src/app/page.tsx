'use client';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';
import Fab from '@mui/material/Fab';
import Image from 'next/image';
import classes from './styles.module.scss';
import blogImage1 from './../../public/assets/img/blog/01.jpg';
import blogImage2 from './../../public/assets/img/blog/001.jpg';
import blogImage3 from './../../public/assets/img/blog/author.png';
import blogImage4 from './../../public/assets/img/blog/b-01.jpg';
import blogImage5 from './../../public/assets/img/blog/banner.jpg';
import blogImage6 from './../../public/assets/img/blog/comments1.png';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const dispatch = useAppDispatch();

  const setInfoSidebarHandler = () => {
    dispatch(setIsOpenInfoSidebar(false));
  };

  const [imageArray, setImageArray] = useState([
    { key: 1, display: false, path: blogImage1 },
    { key: 2, display: false, path: blogImage2 },
    { key: 3, display: false, path: blogImage3 },
    { key: 4, display: false, path: blogImage4 },
    { key: 5, display: false, path: blogImage5 },
    { key: 6, display: false, path: blogImage6 },
  ]);

  const [selectIndex, setSelectIndex] = useState(0);

  const [popupToggle, setPopupToggle] = useState(false);

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

  return (
    <main>
      <CssBaseline />

      <Box sx={{ bgcolor: '#f24d1d', height: '100vh' }} onClick={setInfoSidebarHandler}>
        <div className="logo-side mb-30">
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ bgcolor: '#10cf83', padding: 2, border: 1 }}
          >
            <Item>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                sx={{ bgcolor: '#10cf83', padding: 2, border: 1 }}
              >
                <Item>
                  <Avatar alt="Remy Sharp" src="/assets/img/portfolio/p1.jpg" sx={{ width: 60, height: 60 }} />
                </Item>
                <Item>닉네임</Item>
                <Item>
                  <div>
                    {/* 방문일자 */}
                    <span>2024년 5월 9일</span>
                  </div>
                </Item>
              </Stack>
            </Item>
            <Fab color="secondary" size="small">
              <MoreVertIcon />
            </Fab>
          </Stack>
          <div className={classes.container}>
            <h1 className={classes.title}>Image Gallery</h1>

            <div className={classes.imageContainer}>
              {imageArray.map(({ key, path }, index) => (
                <div key={key} className={classes.image}>
                  <Image
                    src={path}
                    width={350}
                    height={250}
                    alt={`${key}`}
                    onClick={() => displayImagePopupHandler(index)}
                  />
                </div>
              ))}
            </div>
            <div className={classes.popupImage} style={{ display: popupToggle ? 'block' : 'none' }}>
              <span onClick={closeImagePopupHandler}>&times;</span>
              {/* https://nextjs.org/docs/app/building-your-application/optimizing/images => Remote Images
              Image 컴포넌트 사용법 익히고 수정 */}
              <Image src={imageArray[selectIndex].path} alt={`${1}`} />
            </div>
          </div>
        </div>
      </Box>
    </main>
  );
}
