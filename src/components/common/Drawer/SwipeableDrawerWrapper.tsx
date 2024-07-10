import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import classes from './styles.module.scss';

interface SwipeableDrawerWrapperProps {
  title: string;
  children: React.ReactNode;
  drawerState: boolean;
  setHandler: (state: boolean) => void;
  toggleHandler: () => void;
  buttonRender: boolean;
}

export default function SwipeableDrawerWrapper({
  title,
  children,
  drawerState,
  setHandler,
  buttonRender,
}: SwipeableDrawerWrapperProps) {
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
      setHandler(open);
    };

  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={drawerState}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      PaperProps={{
        sx: {
          borderRadius: '30px 30px 0 0',
        },
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
      {buttonRender && (
        <div className={classes.buttonWrapper}>
          <button
            type="button"
            className={classes.button}
            onClick={toggleDrawer(false)}
          >
            완료
          </button>
        </div>
      )}
    </SwipeableDrawer>
  );
}
