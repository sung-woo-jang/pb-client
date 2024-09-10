import classes from '@/app/place/[id]/styles.module.scss';
import PlacePickIcon from '@/components/common/interaction/PlacePickIcon';
import StarIcon from '@/components/Icon/StarIcon';
import { IGetSearchPlaceResult } from '@/api/search/getSearchPlaceDetail';
import AddressTooltip from '@/app/place/[id]/_component/AddressTooltip';

interface IPsResultDescriptionProps {
  place: IGetSearchPlaceResult;
}

export default function PsResultDescription({
  place,
}: IPsResultDescriptionProps) {
  const { place_average_rate, road_address, address, title, id } = place;
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
        {/*TODO*/}
        <PlacePickIcon placeId={id} placeTitle={title} />
      </div>
    </div>
  );
}
