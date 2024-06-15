import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import classes from './style.module.scss';
import Link from 'next/link';
import PlacePickIcon from '../interaction/PlacePickIcon';

export default function PlacePickCard() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <Link href={'#'} className={classes.title}>
          보문갈비
          <ChevronRightIcon sx={{ cursor: 'pointer' }} />
        </Link>
        <p className="text-gray-500">육류, 고기요리 - 경상북도 경주시 천군동</p>
      </div>
      <PlacePickIcon />
    </div>
  );
}
