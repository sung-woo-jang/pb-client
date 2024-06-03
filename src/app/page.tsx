'use client';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import InfoSidebar from '@/components/sidebar/InfoSidebar';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';
import BnB from '@/components/navigation/BnB';
import GnB from '@/components/navigation/GnB';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';
import Fab from '@mui/material/Fab';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const isOpenInfoSidebar = useAppSelector((state) => state.commom.isOpenInfoSidebar);
  const dispatch = useAppDispatch();
  const toggleInfoSidebarHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    dispatch(setIsOpenInfoSidebar(!isOpenInfoSidebar));
    event.stopPropagation();
  };
  const setInfoSidebarHandler = () => {
    dispatch(setIsOpenInfoSidebar(false));
  };

  return (
    <main>
      <CssBaseline />
      <GnB toggleInfoSidebarHandler={toggleInfoSidebarHandler} />
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
        </div>
      </Box>
      <InfoSidebar isOpenInfoSidebar={isOpenInfoSidebar} toggleInfoSidebarHandler={toggleInfoSidebarHandler} />
      <BnB />
    </main>
  );
}
