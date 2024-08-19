import Image from 'next/image';
import Link from 'next/link';
import { generatePostImageUrl } from '@/utils/generateImageUrl';
import { IPost } from '@/api/timeline/getTimelineList';

interface ITimelineImagesProps {
  posts: IPost[];
}

export default function TimelineImages({ posts }: ITimelineImagesProps) {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      {posts.map(({ id, images }) => (
        <Link key={id} href={`/timeline/${id}`}>
          <Image
            src={generatePostImageUrl(images[0].image_path)}
            alt={images[0].image_path}
            style={{ width: '100px', height: '100px' }}
            width={100}
            height={100}
          />
        </Link>
      ))}
    </div>
  );
}
