'use client';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';
import Link from 'next/link';

export default function Home() {
  const dispatch = useAppDispatch();

  const setInfoSidebarHandler = () => {
    dispatch(setIsOpenInfoSidebar(false));
  };

  return (
    <main>
      <CssBaseline />

      <Box sx={{ height: '100vh' }} onClick={setInfoSidebarHandler}>
        <div style={{ padding: '20px' }}>
          <ul>
            <li>
              <h3>
                <Link href={'timeline'}>- 타임라인</Link>
              </h3>
            </li>
          </ul>
        </div>
      </Box>
    </main>
  );
}
