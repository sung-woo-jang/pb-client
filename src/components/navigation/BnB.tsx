import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SyntheticEvent, useState } from 'react';

export default function BnB() {
  const [value, setValue] = useState<number>(0);
  const bnbStateChangeHandler = (_: SyntheticEvent<Element, Event>, value: number) => {
    setValue(value);
  };
  return (
    <BottomNavigation showLabels value={value} onChange={bnbStateChangeHandler}>
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
