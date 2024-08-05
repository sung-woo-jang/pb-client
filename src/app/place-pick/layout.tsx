'use client';
import { useMap } from '@/hooks/useMap';
import { useGetCoordinates } from '@/api/coords/getCoordinates';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useRef } from 'react';
import PPCategory from '@/app/place-pick/_components/PPCategory';
import useUpdateHeight from '@/hooks/temp/useUpdateHeight';
import {
  placePickMapContainerStyle,
  placePickOpenInFullIconStyle,
  PPCategoryContainerStyle,
} from '@/app/place-pick/cssProps.styles';

export default function Layout() {
  // 네이버 지도 객체를 저장할 참조를 생성
  const divRef = useRef<HTMLDivElement>(null);
  const { mapHeight, fullWidth, setFullWidth } = useUpdateHeight(divRef);

  const { data: markers } = useGetCoordinates();
  useMap({ markers });
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
        <PPCategory />
      </div>
    </div>
  );
}
