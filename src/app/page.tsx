'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '@/../public/logo.png';
import { useQueryClient } from '@tanstack/react-query';
import { CommonResponse } from '@/types/apiTypes';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import { IMyInfo } from '@/api/auth/getMyInfo';
import useDeepCompareEffect from 'use-deep-compare-effect';

export default function Home() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(true);

  useDeepCompareEffect(() => {
    const checkLoginStatus = () => {
      try {
        const myInfo = queryClient.getQueryData<CommonResponse<IMyInfo>>(
          generateQueryKeysFromUrl(API_URL.AUTH.GET_MY_INFO)
        );

        if (myInfo?.isLogin) {
          router.push('/place');
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching login status:', error);
        router.push('/login'); // 에러 발생 시 로그인 페이지로 리다이렉트
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, [queryClient, router]);

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
