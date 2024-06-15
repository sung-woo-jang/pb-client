'use client';
import { useToggle } from 'usehooks-ts';
import { EmptyStar, FillStar } from '../../Icon';
import classes from './styles.module.scss';

export default function PlacePickIcon() {
  const [toggle, setToggle] = useToggle(true);
  return (
    <div onClick={setToggle} className={classes.icon}>
      {toggle ? <FillStar /> : <EmptyStar />}
      <span className="text-gray-500 mt-1">저장</span>
    </div>
  );
}
