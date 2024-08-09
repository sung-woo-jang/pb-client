'use client';
import PPCategory from '@/app/place-pick/_components/PPCategory';
import { useGetMyInfo } from '@/api/auth/getMyInfo';

export default function Page() {
  return (
    <div>
      <PPCategory />
    </div>
  );
}
