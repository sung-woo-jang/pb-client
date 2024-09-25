import classes from '@/app/place/[id]/styles.module.scss';
import StarIcon from '@/components/icon/StarIcon';
import { IGetSearchPlaceResult } from '@/api/search/getSearchPlaceDetail';
import AddressTooltip from '@/components/common/Tooltip/AddressTooltip';
import PlacePickIcon from '@/components/common/PlacePick/PlacePickIcon';
import * as React from 'react';
import WritePostButtson from '@/components/common/interaction/WritePostButtson';

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
      <div className="flex items-center justify-between mt-6">
        <PlacePickIcon placeId={id} placeTitle={title} />
        <WritePostButtson placeId={id} />
      </div>
    </div>
  );
}
