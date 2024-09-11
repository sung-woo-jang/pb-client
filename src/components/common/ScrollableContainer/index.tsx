import { ReactNode } from 'react';
import classes from './styles.module.scss';

interface ScrollableContainerProps {
  children: ReactNode;
  maxHeight?: string | number;
}

export default function ScrollableContainer({
  maxHeight,
  children,
}: ScrollableContainerProps) {
  return (
    <div className={classes.wrapper} style={{ maxHeight }}>
      {children}
    </div>
  );
}
