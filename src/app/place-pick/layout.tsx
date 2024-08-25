'use client';
import useUpdateHeight from '@/hooks/temp/useUpdateHeight';
import useGetAllMyPlacePick from '@/api/coords/getCoordinates';
import { useMap } from '@/hooks/useMap';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import {
  placePickMapContainerStyle,
  placePickOpenInFullIconStyle,
  PPCategoryContainerStyle,
} from '@/app/place-pick/styles/cssProps.styles';
import React, { useRef } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 네이버 지도 객체를 저장할 참조를 생성
  const divRef = useRef<HTMLDivElement>(null);
  const { mapHeight, fullWidth, setFullWidth } = useUpdateHeight(divRef);
  const { data } = useGetAllMyPlacePick();
  useMap({ coords: data?.coords });
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <OpenInFullIcon
        sx={placePickOpenInFullIconStyle}
        onClick={() => {
          setFullWidth(!fullWidth);
        }}
      />
      <div id="map" style={placePickMapContainerStyle(mapHeight)} />
      <div ref={divRef} style={PPCategoryContainerStyle}>
        {children}
      </div>
    </div>
  );
}
