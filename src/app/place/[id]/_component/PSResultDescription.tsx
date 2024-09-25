import classes from '@/app/place/[id]/styles.module.scss';
import StarIcon from '@/components/Icon/StarIcon';
import { IGetSearchPlaceResult } from '@/api/search/getSearchPlaceDetail';
import AddressTooltip from '@/components/common/Tooltip/AddressTooltip';
import PlacePickIcon from '@/components/common/PlacePick/PlacePickIcon';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import * as React from 'react';
import { useRouter } from 'next/navigation';

interface IPsResultDescriptionProps {
  place: IGetSearchPlaceResult;
}

export default function PsResultDescription({
  place,
}: IPsResultDescriptionProps) {
  const { place_average_rate, road_address, address, title, id } = place;
  const router = useRouter();
  const writePostButtonClickHandler = () => {
    router.push(`/review/${id}`);
  };
  return (
    <div className="mt-4 ml-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className={classes.summary}>
        <StarIcon className="h-4 w-4 text-yellow-400" />
        <span className="ml-1">{place_average_rate}</span>
      </div>
      <div className={classes.summary}>
        <AddressTooltip roadAddress={road_address} lotAddress={address} />
      </div>
      <div className="flex items-center mt-4">
        <PlacePickIcon placeId={id} placeTitle={title} />
      </div>
      <button
        className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={writePostButtonClickHandler}
      >
        <CreateOutlinedIcon className="w-5 h-5" />
        <span>글쓰기</span>
      </button>
    </div>
  );
}
