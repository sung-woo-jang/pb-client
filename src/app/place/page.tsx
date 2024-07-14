'use client';
import { useGetCoordinates } from '@/api/coords/getCoordinates';
import { useMap } from '@/hooks/useMap';
import SearchBox from '@/app/place/results/_components/SearchBox';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';

export default function Page() {
  const { data: markers } = useGetCoordinates();
  useMap({ markers });
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SearchBox />
      <div className="flex flex-col items-center justify-center w-full h-screen border border-black">
        <div className="flex flex-col items-center justify-center flex-1">
          <BiotechOutlinedIcon sx={{ width: '12rem', height: '12rem' }} />
          <p className="mt-4 text-gray-400">최근 검색 기록이 없습니다.</p>
        </div>
      </div>
      <div
        id="map"
        style={{
          width: '100vw',
          height: '100vh',
          transition: 'all ease 0.5s',
        }}
      />
    </div>
  );
}
