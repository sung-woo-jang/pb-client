'use client';
import {
  IGetAllMyPlacePickResponseData,
  selectAllMyPlacePick,
} from '@/api/place-pick/getAllMyPlacePick';
import NaverMap from '@/components/naver/NaverMap';
import useSearchBoxControls from '@/store/slice/searchBox/useSearchBoxControls';
import { useAppSelector } from '@/hooks/redux-hooks';
import SearchHistory from '@/components/common/Search/SearchHistory';
import SearchBox from '@/components/common/Search/SearchBox';
import { CommonResponse } from '@/types/apiTypes';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import { useQueryClient } from '@tanstack/react-query';
import isUndefined from 'lodash/isUndefined';

export default function Page() {
  // 네이버 지도 객체를 저장할 참조를 생성
  const queryClient = useQueryClient();
  const allMyPlacePick = queryClient.getQueryData<
    CommonResponse<IGetAllMyPlacePickResponseData[]>
  >(generateQueryKeysFromUrl(API_URL.PLACE_PICK.GET_ALL_MY_PLACE_PICK));

  const { isFocused } = useSearchBoxControls();
  const headerHeight = useAppSelector((state) => state.common.headerHeight);

  if (!isUndefined(allMyPlacePick)) {
    const transformedQueryData = selectAllMyPlacePick(allMyPlacePick);
    return (
      <div style={{ width: '100%', height: `calc(100vh - ${headerHeight}px)` }}>
        <div className="transition-opacity duration-300 ease-in-out">
          {isFocused ? <SearchHistory /> : <SearchBox />}
        </div>
        <NaverMap placeDetails={transformedQueryData.placeDetails} />
      </div>
    );
  }
}
