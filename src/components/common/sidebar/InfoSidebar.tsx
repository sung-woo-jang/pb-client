'use client';
import Link from 'next/link';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';

const InfoSidebar = () => {
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
    <>
      <div
        className={`extra-info ${isOpenInfoSidebar && 'info-open'}`}
        style={{ backgroundColor: '#6126ef' }}
      >
        <div className="close-icon">
          <button
            onClick={toggleInfoSidebarHandler}
            // x 아이콘 색깔
            style={{ color: 'white' }}
          >
            <i className="far fa-window-close"></i>
          </button>
        </div>
        <div className="logo-side mb-30">
          <Avatar
            alt="Remy Sharp"
            src="/assets/img/portfolio/p1.jpg"
            sx={{ width: 60, height: 60 }}
          />
          <div style={{ color: 'white' }}>
            <div>닉네임</div>
            <div>
              <div>
                <span>팔로잉 2</span>
              </div>
              <div>
                <span>팔로워 4</span>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="side-info mb-30">
          <List style={{ backgroundColor: '#ffffff' }}>
            <Link href="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="팔로우/차단 관리" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="프로필 편집" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="로그아웃" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </div>
      </div>
    </>
  );
};

export default InfoSidebar;
