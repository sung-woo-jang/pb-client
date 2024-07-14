import { RefObject, useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/redux-hooks';

export default function useUpdateHeight(divRef: RefObject<HTMLDivElement>) {
  const headerHeight = useAppSelector((state) => state.common.headerHeight);
  const [mapHeight, setMapHeight] = useState<string>('100%');
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  useEffect(() => {
    const updateHeight = () => {
      if (divRef.current) {
        const newMapHeight = fullWidth
          ? `calc(100vh - ${divRef.current.scrollHeight + headerHeight}px)`
          : '90%';
        setMapHeight(newMapHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [divRef, fullWidth, headerHeight]);

  return { mapHeight, fullWidth, setFullWidth };
}
