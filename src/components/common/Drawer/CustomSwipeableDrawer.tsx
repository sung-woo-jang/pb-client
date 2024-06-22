import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setCommentDrawerState } from '@/store/slice/drawer/slice';

interface CustomSwipeableDrawerProps {
  title: string;
  children: React.ReactNode;
}

export default function CustomSwipeableDrawer({
  title,
  children,
}: CustomSwipeableDrawerProps) {
  const dispatch = useAppDispatch();
  const commentDrawerState = useAppSelector(
    (state) => state.drawer.commentDrawerState
  );
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      dispatch(setCommentDrawerState(open));
    };

  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={commentDrawerState}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      PaperProps={{
        sx: { borderRadius: '30px 30px 0 0' },
      }}
    >
      <Box
        sx={{ width: 'auto', height: '60vh' }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <div
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/*빈 칸*/}
          <div />
          <div>{title}</div>
          <div style={{ cursor: 'pointer' }} onClick={toggleDrawer(false)}>
            <CloseIcon fontSize={'large'} />
          </div>
        </div>
        {children}
      </Box>
    </SwipeableDrawer>
  );
}
