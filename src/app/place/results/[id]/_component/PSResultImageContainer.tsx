import classes from '@/app/place/results/[id]/styles.module.scss';
import Image from 'next/image';
import placeHolder from '../../../../../../public/placeholder.svg';

export default function PSResultImageContainer() {
  return (
    <div className={classes.imageContainer}>
      <Image
        src={placeHolder}
        alt="Restaurant Image 1"
        className={classes.image}
      />
      <Image
        src={placeHolder}
        alt="Restaurant Image 2"
        className={classes.image}
      />
      <Image
        src={placeHolder}
        alt="Restaurant Image 3"
        className={classes.image}
      />
    </div>
  );
}
