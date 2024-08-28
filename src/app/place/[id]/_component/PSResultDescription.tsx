import classes from '@/app/place/[id]/styles.module.scss';
import PlacePickIcon from '@/components/common/interaction/PlacePickIcon';
import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';
import StarIcon from '@/components/Icon/StarIcon';
import { FaMapLocation } from 'react-icons/fa6';
import { IGetSearchPlaceResult } from '@/api/search/getSearchPlaceDetail';

interface IPsResultDescriptionProps {
  place: IGetSearchPlaceResult;
}

export default function PsResultDescription({
  place,
}: IPsResultDescriptionProps) {
  const { place_average_rate, road_address, total_posts, title, id } = place;
  return (
    <div className="mt-4 ml-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className={classes.summary}>
        <StarIcon className="h-4 w-4 text-yellow-400" />
        <span className="ml-1">{place_average_rate}</span>
        <span className="mx-1">&#183;</span>
        <span>리뷰 {total_posts}</span>
        <span className="mx-1">&#183;</span>
        {/*TODO*/}
        <span>팔로워 리뷰 27</span>
      </div>
      <div className={classes.summary}>
        <FaMapLocation className="h-4 w-4 mr-1" />
        <span>{road_address}</span>
        <ChevronDownIcon className="h-4 w-4 ml-1" />
      </div>
      <div className="flex items-center mt-4">
        {/*TODO*/}
        <PlacePickIcon placeId={id} placeTitle={title} />
      </div>
    </div>
  );
}
