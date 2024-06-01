'use client';
import { axiosInstance } from './axiosInstance';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { useEffectOnce } from '@/hooks/useEffectOnce';
// import { setIsLogin } from '@/store/slice/authSlice';

interface Props {
  children: React.ReactNode;
}

function AxiosInterceptor({ children }: Props) {
  const dispatch = useAppDispatch();
  useEffectOnce(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        // dispatch(setIsLogin(response.data.isLogin));
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
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
  });
  return children;
}

export { AxiosInterceptor };
