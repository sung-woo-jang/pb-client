import classes from '@/app/place/[id]/styles.module.scss';
import { ISearchPlaceDetailImages } from '@/api/search/getSearchPlaceDetail';
import Image from 'next/image';
import noImage from '@/../public/assets/img/no_image.png';
import ImageGallery from '@/components/common/ImageGallery';

interface IPSResultImageContainerProps {
  images: ISearchPlaceDetailImages[];
}

export default function PSResultImageContainer({
  images,
}: IPSResultImageContainerProps) {
  return (
    <div className={classes.imageContainer}>
      {images.length === 0 && (
        <Image src={noImage} alt={'noImage'} width={1000} height={1000} />
      )}
      {images.length !== 0 && (
        <ImageGallery images={images} maxThumbnails={3} />
      )}
    </div>
  );
}
