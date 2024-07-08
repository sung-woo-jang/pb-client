import { data } from '@/app/place-pick/data';
import { useQuery } from '@tanstack/react-query';

type Coordinates = [number, number];

const delay = (): Promise<Coordinates[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 1000)
  );
};

export const getCoordinates = async (): Promise<Coordinates[]> => {
  return await delay();
};

export const useGetCoordinates = () =>
  useQuery({ queryKey: ['coordinates'], queryFn: getCoordinates });
