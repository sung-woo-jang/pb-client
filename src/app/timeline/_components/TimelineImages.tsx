import Image from 'next/image';
import Link from 'next/link';
import { generatePostImageUrl } from '@/utils/generateImageUrl';
import { IPost } from '@/api/timeline/getTimelineList';
import classes from '@/app/timeline/styles.module.scss';

interface ITimelineImagesProps {
  posts: IPost[];
}

export default function TimelineImages({ posts }: ITimelineImagesProps) {
  return (
    <div className={classes.imageGrid}>
      {posts.map(({ id, images }) => (
        <Link key={id} href={`/timeline/${id}`} className={classes.imageLink}>
          <Image
            src={generatePostImageUrl(images[0].image_path)}
            alt={images[0].image_path}
            layout="fill"
            objectFit="cover"
            className={classes.image}
          />
        </Link>
      ))}
    </div>
  );
}
