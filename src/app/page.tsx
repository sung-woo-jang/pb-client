'use client';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/common/slice';
import Link from 'next/link';

export default function Home() {
  const dispatch = useAppDispatch();

  const setInfoSidebarHandler = () => {
    dispatch(setIsOpenInfoSidebar(false));
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <CssBaseline />
      <Box
        sx={{ height: '100vh' }}
        onClick={setInfoSidebarHandler}
        className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Page List</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">- 타임라인</h3>
            <ul className="ml-4 space-y-2">
              <li>
                <Link
                  href={'/timeline'}
                  className="text-gray-700 hover:underline"
                >
                  타임라인 메인
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="text-xl font-semibold">- 장소 검색</h3>
            <ul className="ml-4 space-y-2">
              <li>
                <Link href={'/place'} className="text-gray-700 hover:underline">
                  검색 메인
                </Link>
              </li>
              <li>
                <Link
                  href={'/place/results'}
                  className="text-gray-700 hover:underline"
                >
                  검색 결과
                </Link>
              </li>
              <li>
                <Link
                  href={'/place/results/apple'}
                  className="text-gray-700 hover:underline"
                >
                  검색 결과 상세
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </Box>
    </main>
  );
}
