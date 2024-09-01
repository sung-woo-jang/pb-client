'use client';
import ProfileImage from '@/components/common/ProfileImage';
import classes from '@/app/place/[id]/styles.module.scss';
import StarRatingTooltip from '@/components/post/StarRatingTooltip';
import ReadMoreText from '@/components/common/ReadMoreText';
import KeywordBox from '@/components/post/KeywordBox';
import { IPost } from '@/api/search/getSearchPlaceDetail';
import generateYYYYMMDD from '@/utils/generateYYYY_MM_DD';
import ImageGallery from '@/components/common/ImageGallery';

interface IPsResultReviewProps {
  post: IPost;
}

export default function PsResultReview({ post }: IPsResultReviewProps) {
  const { images, rate, keywords, visitDate, user, content } = post;

  return (
    <div className={classes.reviewWrapper}>
      <div className="bg-white p-3">
        <div className="rounded-md flex">
          <ReadMoreText text={content} />
          <ImageGallery images={images} maxThumbnails={1} />
        </div>
        <KeywordBox keywords={keywords} />
        <div className="flex items-center">
          <ProfileImage
            userId={user.id}
            profileImageUrl={user.profileImage}
            userName={user.nickname}
            visitDate={generateYYYYMMDD(visitDate)}
          />
          <div className={classes.rating}>
            <StarRatingTooltip rate={rate} />
          </div>
        </div>
      </div>
    </div>
  );
}
