import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function FollowList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="p-4 space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 border rounded-md"
        >
          <div className="flex items-center">
            <Avatar alt="Remy Sharp" src="/placeholder-user.jpg" />
            <p className="ml-2 text-lg black-color">유저 닉네임</p>
          </div>
          <Button
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              color: 'black',
            }}
          >
            <MoreVertIcon className="w-6 h-6" />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{
              '& .MuiPaper-root': {
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <MenuItem onClick={handleClose}>팔로우 (취소)</MenuItem>
          </Menu>
        </div>
      ))}
    </div>
  );
}
