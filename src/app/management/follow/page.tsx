'use client';
import WestIcon from '@mui/icons-material/West';
import Stepper from '@/app/management/follow/_components/Stepper';
import FollowList from '@/app/management/follow/_components/FollowList';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full bg-white shadow-md rounded-md">
      <header className="flex items-center justify-between p-4 border-b">
        <Link href={'/'}>
          <div className="flex items-center">
            <WestIcon />
            <h1 className="ml-2 text-lg font-semibold">내 닉네임</h1>
          </div>
        </Link>
      </header>
      <Stepper />
      <FollowList />
    </div>
  );
}
