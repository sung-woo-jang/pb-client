'use client';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';
import { TimelineCard } from '@/components/timeline/TimelineCard';

export default function Home() {
  const dispatch = useAppDispatch();

  const setInfoSidebarHandler = () => {
    dispatch(setIsOpenInfoSidebar(false));
  };

  return (
    <main>
      <CssBaseline />

      <Box sx={{ bgcolor: '#f24d1d', height: '100vh' }} onClick={setInfoSidebarHandler}>
        <TimelineCard />
      </Box>
    </main>
  );
}
