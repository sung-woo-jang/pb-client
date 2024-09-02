'use client';
import { axiosInstance } from './axiosInstance';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';

// import { setIsLogin } from '@/store/slice/authSlice';

interface Props {
  children: React.ReactNode;
}

function AxiosInterceptor({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        if (response && !response.data.isLogin && pathname !== '/login') {
          // 현재 페이지가 로그인 페이지가 아닐 때만 리다이렉트
          router.push('/login');
        }
        return response;
      },
      (error) => {
        if (
          error.response &&
          !error.response.data.isLogin &&
          pathname !== '/login'
        ) {
          // 현재 페이지가 로그인 페이지가 아닐 때만 리다이렉트
          router.push('/login');
        }
        return Promise.reject(error);
      }
    );

    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (pathname === '/login') {
          // 로그인 페이지에서는 요청을 취소합니다.
          const source = axios.CancelToken.source();
          config.cancelToken = source.token;
          source.cancel('Request canceled: current page is login');
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [pathname]);
  return children;
}

export { AxiosInterceptor };
