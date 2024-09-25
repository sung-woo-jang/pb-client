import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Link from 'next/link';
import * as React from 'react';
import { useEffect } from 'react';
import { ISearchPlacesResponseData } from '@/api/search/searchPlaces';
import { FaPhoneAlt } from 'react-icons/fa';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { resetPostEditorState } from '@/store/slice/postEditor/slice';
import { useRouter } from 'next/navigation';
import PlacePickIcon from '@/components/common/PlacePick/PlacePickIcon';
import AddressTooltip from '@/components/common/Tooltip/AddressTooltip';
import NaverDirectionsButton from '@/components/Naver/NaverDirectionsButton';

interface ISearchPlaceInfoProps {
  placeInfo: ISearchPlacesResponseData;
}

export default function SearchPlaceInfo({
  placeInfo: {
    road_address,
    placeCategory,
    description,
    title,
    telephone,
    id,
    address,
  },
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
    <div className="bg-white rounded-lg shadow-md p-6 m-4 space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <Link href={`/place/${id}`} className="group">
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {title}
            </h2>
          </Link>
          <p className="text-sm text-gray-600">
            {placeCategory.place_category_name} {'›'}{' '}
            <span className="font-medium">
              {placeCategory.place_category_name_detail}
            </span>
          </p>
          <div className="flex items-center text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
            <AddressTooltip roadAddress={road_address} lotAddress={address} />
          </div>
        </div>
      </div>

      {description && (
        <p className="text-sm text-gray-600 italic">{description}</p>
      )}

      {telephone && (
        <div className="flex items-center text-sm text-gray-700">
          <FaPhoneAlt className="w-4 h-4 text-green-500 mr-2" />
          <p>{telephone}</p>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={writePostButtonClickHandler}
        >
          <CreateOutlinedIcon className="w-5 h-5" />
          <span>글쓰기</span>
        </button>
        <PlacePickIcon placeId={id} placeTitle={title} />
        <NaverDirectionsButton
          roadAddress={road_address}
          address={address}
          title={title}
        />
      </div>
    </div>
  );
}
