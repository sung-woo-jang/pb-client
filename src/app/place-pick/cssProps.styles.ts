import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { CSSProperties } from 'react';

export const placePickOpenInFullIconStyle: SxProps<Theme> = {
  position: 'absolute',
  zIndex: 100,
  color: 'black',
  marginTop: '.5rem',
  right: '3%',
  backgroundColor: 'white',
  cursor: 'pointer',
};

export const placePickMapContainerStyle = (mapHeight: string) =>
  ({
    width: '100%',
    height: mapHeight,
    transition: 'all ease 0.5s',
  }) as CSSProperties | undefined;

export const PPCategoryContainerStyle: CSSProperties | undefined = {
  backgroundColor: 'white',
  width: '100%',
  height: 'auto',
  transition: 'all ease 0.5s',
  color: 'black',
};
