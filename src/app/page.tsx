'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '@/../public/logo.png';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      // TODO: 실제 로그인 상태 확인 로직으로 대체해야 합니다.
      const isLoggedIn = await fakeCheckLoginStatus();

      if (isLoggedIn) {
        router.push('/newsfeed');
      } else {
        router.push('/login');
      }
    };

    // 로고를 잠시 보여주기 위해 타임아웃 설정
    const timer = setTimeout(() => {
      checkLoginStatus();
    }, 2000); // 2초 후 로그인 상태 확인

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative w-32 h-32 mb-8 animate-pulse">
        <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
      </div>
      <h1 className="text-2xl font-bold mb-4">플벗</h1>
      {isLoading && (
        <div className="mt-4">
          <div className="w-8 h-8 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

// 임시 로그인 상태 확인 함수 (실제 구현으로 대체 필요)
function fakeCheckLoginStatus(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 임의로 로그인 상태 결정 (실제 로직으로 대체 필요)
      resolve(Math.random() > 0.9);
    }, 1000);
  });
}
