import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';
import BookmarkIcon from '@/components/Icon/BookmarkIcon';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Link from 'next/link';
import * as React from 'react';
import { useEffect } from 'react';
import { ISearchPlacesResponseData } from '@/api/search/searchPlaces';
import { FaPhoneAlt } from 'react-icons/fa';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { resetPostEditorState } from '@/store/slice/postEditor/slice';
import { useRouter } from 'next/navigation';

interface ISearchPlaceInfoProps {
  placeInfo: ISearchPlacesResponseData;
}

export default function SearchPlaceInfo({
  placeInfo: { road_address, placeCategory, description, title, telephone, id },
}: ISearchPlaceInfoProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetPostEditorState());
  }, [dispatch]);
  const writePostButtonClickHandler = () => {
    router.push(`/review/${id}`);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm m-3">
      <div className="flex justify-between mb-2">
        <div>
          <Link href={`/place/${id}`}>
            <h2 className="text-lg font-semibold">{title}</h2>
          </Link>
          <p className="text-sm text-muted-foreground">
            {placeCategory.place_category_name} {'>'}{' '}
            {placeCategory.place_category_name_detail}
          </p>
          <div className="flex items-center ">
            <p className="flex">
              {road_address}
              {/*TODO: 클릭 시 address 보이게 수정*/}
              <ChevronDownIcon className="text-muted-foreground mt-1" />
            </p>
          </div>
        </div>
      </div>

      {description && (
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
      )}

      <div className="flex items-center mb-2">
        {telephone && (
          <div className="flex items-center ml-4">
            <FaPhoneAlt className="w-4 h-4 text-green-500 mr-1" />
            <p className="text-sm">{telephone}</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-around border-t pt-2">
        <button
          className="flex items-center"
          onClick={writePostButtonClickHandler}
        >
          <CreateOutlinedIcon />
          글쓰기
        </button>
        <button className="flex items-center">
          <BookmarkIcon className="w-4 h-4 mr-1" />
          폴픽
        </button>
      </div>
    </div>
  );
}
