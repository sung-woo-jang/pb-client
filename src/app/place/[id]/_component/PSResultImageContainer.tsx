import classes from '@/app/place/[id]/styles.module.scss';
import { ISearchPlaceDetailImages } from '@/api/search/getSearchPlaceDetail';
import ConfigurableSourceImage from '@/components/common/ConfigurableSourceImage';

interface IPSResultImageContainerProps {
  images: ISearchPlaceDetailImages[];
}

export default function PSResultImageContainer({
  images,
}: IPSResultImageContainerProps) {
  return (
    <div className={classes.imageContainer}>
      {images.map(({ image_path, id }) => (
        <ConfigurableSourceImage
          src={image_path}
          alt={image_path}
          key={id}
          className={classes.image}
          width={100}
          height={100}
        />
      ))}
    </div>
  );
}
