'use client';
import { useToggle } from 'usehooks-ts';
import { EmptyStar, FillStar } from '../../Icon';

export default function PlacePickIcon() {
  const [toggle, setToggle] = useToggle(true);
  return (
    <div onClick={setToggle} style={{ cursor: 'pointer' }}>
      {toggle ? <FillStar /> : <EmptyStar />}
    </div>
  );
}
