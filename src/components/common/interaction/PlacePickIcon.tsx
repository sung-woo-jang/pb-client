'use client';
import { useToggle } from 'usehooks-ts';
import classes from './styles.module.scss';
import { useAddPPDrawer } from '@/store/slice/drawer/useDrawerController';
import FillStar from '@/components/Icon/FillStar';
import EmptyStar from '@/components/Icon/EmptyStar';

export default function PlacePickIcon() {
  const [toggle, setToggle] = useToggle(true);
  const onCLickHandler = () => {
    setToggle();
    addPPDrawerToggleHandler();
  };

  const { addPPDrawerToggleHandler } = useAddPPDrawer();

  return (
    <div onClick={onCLickHandler} className={classes.icon}>
      {toggle ? <FillStar /> : <EmptyStar />}
      <span className="text-gray-500 mt-1">저장</span>
    </div>
  );
}
