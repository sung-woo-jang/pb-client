import classes from '@/app/place/[id]/styles.module.scss';
import { ISearchPlaceDetailImages } from '@/api/search/getSearchPlaceDetail';
import ConfigurableSourceImage from '@/components/common/ConfigurableSourceImage';
import Image from 'next/image';
import noImage from '@/../public/assets/img/no_image.png';

interface IPSResultImageContainerProps {
  images: ISearchPlaceDetailImages[];
}

export default function PSResultImageContainer({
  images,
}: IPSResultImageContainerProps) {
  {
    /*TODO: 화면 고치기*/
  }
  return (
    <div className={classes.imageContainer}>
      {images.length === 0 && (
        <Image src={noImage} alt={'noImage'} width={1000} height={1000} />
      )}
      {images.length !== 0 &&
        images.map(({ image_path, id }) => (
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
