'use client';
import logo from '@/../public/logo.png';
import Image from 'next/image';
import { SiNaver } from 'react-icons/si';
import useGetMyInfo from '@/api/auth/getMyInfo';
import { useRouter } from 'next/navigation';
import isUndefined from 'lodash/isUndefined';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();
  const { data } = useGetMyInfo();
  const [isClosed, setIsClosed] = useState(false);

  const handleNaverLogin = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const loginWindow = window.open(
      'http://localhost:8000/api/auth/login-naver',
      'NaverLogin',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    const checkLoginStatus = setInterval(() => {
      if (loginWindow?.closed) {
        setIsClosed(loginWindow.closed);
        clearInterval(checkLoginStatus);
      }
    }, 500);
  };

  useEffect(() => {
    if (isClosed) {
      setIsClosed(false);
      router.push('/newsfeed');
    }
  }, [isClosed, router]);

  useDeepCompareEffect(() => {
    if (!isUndefined(data)) {
      setIsClosed(false);
      router.push('/newsfeed');
    }
  }, [router, data]);
  return (
    <div className="flex items-center justify-center min-h-screen py-6 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src={logo}
            width={180}
            height={180}
            alt="PlavBuds logo"
            className="drop-shadow-xl"
          />
          <h1 className="mt-4 text-3xl font-bold text-gray-800 tracking-wide">
            PlavBuds
          </h1>
        </div>

        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg flex items-center justify-center"
          onClick={handleNaverLogin}
        >
          <SiNaver className="mr-3 text-white" />
          <span className="text-xl">네이버 계정으로 로그인</span>
        </button>
      </div>
    </div>
  );
}
