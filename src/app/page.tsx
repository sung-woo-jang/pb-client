'use client';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';
import TimelineImageContainer from '@/components/main/TimelineImageContainer';
import TimelineHead from '@/components/main/TimelineHead';

export default function Home() {
  const dispatch = useAppDispatch();

  const setInfoSidebarHandler = () => {
    dispatch(setIsOpenInfoSidebar(false));
  };

  return (
    <main>
      <CssBaseline />

      <Box sx={{ bgcolor: '#f24d1d', height: '100vh' }} onClick={setInfoSidebarHandler}>
        <div className="logo-side mb-30">
          <TimelineHead />
          <TimelineImageContainer />
        </div>
      </Box>
    </main>
  );
}
