import SmileIcon from '@/components/Icon/SmileIcon';
import UserIcon from '@/components/Icon/UserIcon';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const sx: SxProps<Theme> = {
  color: 'black',
  borderColor: 'gray',
};
export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-100">
      <Badge
        badgeContent={
          <EditIcon
            sx={{
              color: '#000000',
              background: 'transparent',
              marginRight: '1rem',
              marginBottom: '2rem',
              width: '3rem',
              height: '3rem',
              cursor: 'pointer',
            }}
          />
        }
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/placeholder-user.jpg"
          sx={{
            width: '7rem',
            height: '7rem',
            marginTop: '2rem',
          }}
        />
      </Badge>
      <div className="mt-2 text-xl font-bold">닉네임</div>
      <div className="text-sm text-gray-500">아이디</div>
      <div className="w-11/12 p-4 mt-4 bg-white rounded-lg shadow-md">
        <div className="mb-2 text-lg font-semibold">내프로필</div>
        <div className="flex items-center justify-between py-2 border-t">
          <div className="flex items-center">
            <SmileIcon className="w-6 h-6 mr-2" />
            <span>닉네임</span>
          </div>
          <Button variant="outlined" sx={sx}>
            수정
          </Button>
        </div>
        <div className="flex items-center justify-between py-2 border-t">
          <Link href={'follow'}>
            <div className="flex items-center">
              <UserIcon className="w-6 h-6 mr-2" />
              <span>팔로우 관리</span>
            </div>
          </Link>
          <Link
            href={'/management/follow'}
            className="text-gray-700 hover:underline"
          >
            <Button variant="outlined" sx={sx}>
              수정
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
