'use client';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/commonSlice';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';
import Fab from '@mui/material/Fab';
import TimelineImageContainer from '@/components/main/TimelineImageContainer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TimelineHead() {
  return (
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
  );
}
