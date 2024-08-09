import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

/* 
개발 환경
- baseUrl : localhost:8000
process.env.NODE_ENV === development

배포 환경
- baseUrl : seowasil.shop/api
process.env.NODE_ENV === production
*/
const createAxiosInstance = (contentType: string): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    headers: {
      'Content-Type': contentType,
    },
  };

  return axios.create(config);
};

export const axiosInstance: AxiosInstance =
  createAxiosInstance('application/json');
export const formInstance: AxiosInstance = createAxiosInstance(
  'multipart/form-data'
);
