'use client';
import ProfileImage from '@/components/common/ProfileImage';
import classes from '@/app/place/[id]/styles.module.scss';
import StarRatingTooltip from '@/components/post/StarRatingTooltip';
import ReadMoreText from '@/components/common/ReadMoreText';
import KeywordBox from '@/components/post/KeywordBox';
import { IPost } from '@/api/search/getSearchPlaceDetail';
import generateYYYYMMDD from '@/utils/generateYYYY_MM_DD';
import ConfigurableSourceImage from '@/components/common/ConfigurableSourceImage';

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
          <ConfigurableSourceImage
            src={images[0].image_path}
            width={100}
            height={100}
            alt={images[0].image_path}
            className="rounded-md ml-4 mr-4"
          />
        </div>
        <KeywordBox keywords={keywords} />
        <div className="flex items-center">
          {/*  TODO: 임시 데이터 수정 */}
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
