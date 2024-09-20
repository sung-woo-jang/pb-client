import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import classes from './style.module.scss';
import Link from 'next/link';
import PlacePickIcon from '../PlacePickIcon';
import { IPlace } from '@/api/newsfeed/getNewsFeeds';

interface IPlacePickCardProps {
  place: IPlace;
}

export default function PlacePickCard({ place }: IPlacePickCardProps) {
  const { title, road_address, placeCategory, id } = place;
  const { place_category_name, place_category_name_detail } = placeCategory;
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <Link href={`/place/${id}`} className={classes.title}>
          {title}
          <ChevronRightIcon sx={{ cursor: 'pointer' }} />
        </Link>
        <p className="text-gray-500">
          {place_category_name}, {place_category_name_detail} - {road_address}
        </p>
      </div>
      <PlacePickIcon placeId={id} placeTitle={title} />
    </div>
  );
}
