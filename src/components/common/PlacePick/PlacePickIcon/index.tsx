'use client';
import classes from './styles.module.scss';
import FillStar from '@/components/Icon/FillStar';
import EmptyStar from '@/components/Icon/EmptyStar';
import useAddPPDrawer from '@/store/slice/drawer/addPPDrawer/useAddPPDrawer';
import {
  IGetAllMyPlacePickResponseData,
  selectAllMyPlacePick,
} from '@/api/place-pick/getAllMyPlacePick';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import { CommonResponse } from '@/types/apiTypes';
import isUndefined from 'lodash/isUndefined';

interface IPlacePickIconProps {
  placeId: number;
  placeTitle: string;
  className?: string;
}

export default function PlacePickIcon({
  placeId,
  placeTitle,
  className,
}: IPlacePickIconProps) {
  const queryClient = useQueryClient();
  const allMyPlacePick = queryClient.getQueryData<
    CommonResponse<IGetAllMyPlacePickResponseData[]>
  >(generateQueryKeysFromUrl(API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK));
  const [isPicked, setIsPicked] = useState<boolean>(false);
  const prevPlaceIdsRef = useRef<Set<number> | null>(null);

  const memoizedAreSetsEqual = useCallback(
    (set1: Set<number>, set2: Set<number>): boolean =>
      set1.size === set2.size
        ? Array.from(set1).every((item) => set2.has(item))
        : false,
    []
  );

  const { addPPDrawerToggleHandler, setPlaceTitleHandler, setPlaceIdHandler } =
    useAddPPDrawer();

  const onClickHandler = () => {
    setPlaceIdHandler(placeId);
    setPlaceTitleHandler(placeTitle);
    addPPDrawerToggleHandler();
  };

  useEffect(() => {
    if (!isUndefined(allMyPlacePick)) {
      const transformedQueryData = selectAllMyPlacePick(allMyPlacePick);
      if (
        !prevPlaceIdsRef.current ||
        !memoizedAreSetsEqual(
          prevPlaceIdsRef.current,
          transformedQueryData.placeIds
        )
      ) {
        const placeIds = transformedQueryData.placeIds;
        const newIsPicked = placeIds.has(placeId);

        if (newIsPicked !== isPicked) setIsPicked(newIsPicked);

        prevPlaceIdsRef.current = placeIds;
      }
    }
  }, [placeId, isPicked, memoizedAreSetsEqual, allMyPlacePick]);

  return (
    <div onClick={onClickHandler} className={`${classes.icon} ${className}`}>
      {isPicked ? <FillStar /> : <EmptyStar />}
      <span className="text-gray-500 mt-1">저장</span>
    </div>
  );
}
