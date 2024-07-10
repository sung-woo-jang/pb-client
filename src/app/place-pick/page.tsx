'use client';
import { useMap } from '@/hooks/useMap';
import { useGetCoordinates } from '@/api/coords/getCoordinates';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/hooks/redux-hooks';
import PPCategory from '@/app/place-pick/_components/PPCategory';

function useUpdateHeight(divRef: RefObject<HTMLDivElement>) {
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

export default function Page() {
  // 네이버 지도 객체를 저장할 참조를 생성
  const divRef = useRef<HTMLDivElement>(null);
  const { mapHeight, fullWidth, setFullWidth } = useUpdateHeight(divRef);

  const { data: markers } = useGetCoordinates();
  useMap({ markers });
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <OpenInFullIcon
        sx={{
          position: 'absolute',
          zIndex: 100,
          color: 'black',
          marginTop: '.5rem',
          right: '3%',
          backgroundColor: 'white',
          cursor: 'pointer',
        }}
        onClick={() => {
          setFullWidth(!fullWidth);
        }}
      />
      <div
        id="map"
        style={{
          width: '100%',
          height: mapHeight,
          transition: 'all ease 0.5s',
        }}
      />
      <div
        ref={divRef}
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 'auto',
          transition: 'all ease 0.5s',
          color: 'black',
        }}
      >
        <PPCategory />
      </div>
    </div>
  );
}
