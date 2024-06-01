import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants/API_URL';

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
    // baseURL: API_URL.BASE_URL,
    // baseURL: 'http://seowasil_server:8000/api',
    baseURL: 'http://localhost:8000/api',
    // baseURL: 'http://host.docker.internal:8000/api',
    withCredentials: true,
    headers: {
      'Content-Type': contentType,
    },
  };

  const instance: AxiosInstance = axios.create(config);

  return instance;
};

export const axiosInstance: AxiosInstance = createAxiosInstance('application/json');
export const formInstance: AxiosInstance = createAxiosInstance('multipart/form-data');
