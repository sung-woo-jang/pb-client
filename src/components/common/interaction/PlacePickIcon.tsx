'use client';
import { useToggle } from 'usehooks-ts';
import { EmptyStar, FillStar } from '../../Icon';
import classes from './styles.module.scss';
import { useAddPPCategoryDrawer } from '@/store/slice/drawer/useDrawerController';

export default function PlacePickIcon() {
  const [toggle, setToggle] = useToggle(true);
  const { ppCategoryDrawerToggleHandler } = useAddPPCategoryDrawer();
  const onCLickHandler = () => {
    setToggle();
    ppCategoryDrawerToggleHandler();
  };
  return (
    <div onClick={onCLickHandler} className={classes.icon}>
      {toggle ? <FillStar /> : <EmptyStar />}
      <span className="text-gray-500 mt-1">저장</span>
    </div>
  );
}
