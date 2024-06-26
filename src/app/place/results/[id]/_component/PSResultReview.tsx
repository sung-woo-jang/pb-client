import Image from 'next/image';
import placeHolder from '../../../../../../public/placeholder.svg';
import ProfileImage from '@/components/common/ProfileImage';
import classes from '@/app/place/results/[id]/styles.module.scss';
import StarRatingTooltip from '@/components/post/StarRatingTooltip';

export default function PsResultReview() {
  return (
    <div className={classes.reviewWrapper}>
      <div className="bg-white p-3">
        <div className="rounded-md flex">
          <div className="flex-1">
            하오샤브샤브사시미로 4인가족이 먹었어요. 사장님이 정말 그 이더서도
            주문하고 계산하시며 자주부터 불쾌...
            <ChevronRightIcon className="h-4 w-4 inline" />
          </div>
          <Image
            src={placeHolder}
            width={100}
            height={100}
            alt="Review Image"
            className="object-cover rounded-md mr-8"
          />
        </div>
        <div className="flex items-center">
          <ProfileImage />
          <div className={classes.rating}>
            <StarRatingTooltip />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
