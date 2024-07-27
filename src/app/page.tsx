'use client';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsOpenInfoSidebar } from '@/store/slice/common/slice';
import Link from 'next/link';
import { pageList } from '@/app/pageListData';

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
        <h4>Complete: 🟢, Base: 🟡, Progress: 🟠,Not Progressing: 🔴</h4>
        <ul className="space-y-4">
          {pageList.map(({ head, list }, index) => (
            <li key={index}>
              <h3 className="text-xl font-semibold">- {head}</h3>
              <ul className="ml-4 space-y-2">
                {list.map(({ link, title }, index) => (
                  <li key={index}>
                    <Link href={link} className="text-gray-700 hover:underline">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Box>
    </main>
  );
}
