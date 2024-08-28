'use client';
import classes from './styles.module.scss';
import FillStar from '@/components/Icon/FillStar';
import EmptyStar from '@/components/Icon/EmptyStar';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import useGetAllMyPlacePick from '@/api/place-pick/getAllMyPlacePick';
import { useEffect, useState } from 'react';

interface IPlacePickIconProps {
  placeId: number;
  placeTitle: string;
}

export default function PlacePickIcon({
  placeId,
  placeTitle,
}: IPlacePickIconProps) {
  const { data, isSuccess } = useGetAllMyPlacePick();
  const [isPicked, setIsPicked] = useState<boolean>(false);

  /*
   * TODO
   * 1. isPicked가 true면 플픽 삭제할건지 확인 모달 띄움
   * 2. isPICKED가 false면 플픽 완료 후 setIsPicked(true) 처리
   * */
  const { addPPDrawerToggleHandler, setPlaceTitleHandler, setPlaceIdHandler } =
    useAddPPDrawer();
  const onCLickHandler = () => {
    setPlaceIdHandler(placeId);
    setPlaceTitleHandler(placeTitle);
    addPPDrawerToggleHandler();
  };

  useEffect(() => {
    // TODO: Set Object 사용으로 인한 무한루프 문제 이거 어떻게 해결할 방법 구해야 함
    setIsPicked(isSuccess && data.place_id.has(placeId));
  }, [isSuccess, placeId]);
  return (
    <div onClick={onCLickHandler} className={classes.icon}>
      {isPicked ? <FillStar /> : <EmptyStar />}
      <span className="text-gray-500 mt-1">저장</span>
    </div>
  );
}
