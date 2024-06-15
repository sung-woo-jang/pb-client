'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';
import Link from 'next/link';

export default function GnB() {
  const isOpenInfoSidebar = useAppSelector(
    (state) => state.common.isOpenInfoSidebar
  );
  const dispatch = useAppDispatch();
  const toggleInfoSidebarHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    dispatch(setIsOpenInfoSidebar(!isOpenInfoSidebar));
    event.stopPropagation();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href={'/'}>Logo</Link>
        </Typography>
        <IconButton
          onClick={toggleInfoSidebarHandler}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
