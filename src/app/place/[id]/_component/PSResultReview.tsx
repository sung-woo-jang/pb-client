'use client';
import Image from 'next/image';
import placeHolder from '../../../../../public/placeholder.svg';
import ProfileImage from '@/components/common/ProfileImage';
import classes from '@/app/place/[id]/styles.module.scss';
import StarRatingTooltip from '@/components/post/StarRatingTooltip';
import formatTime, { generateTimestamps } from '@/utils/formatTime';
import { useEffect, useState } from 'react';
import ReadMoreText from '@/components/common/ReadMoreText';
import KeywordBox from '@/components/post/KeywordBox';

export default function PsResultReview() {
  const [createdDate, setCreatedDate] = useState<string>('');
  useEffect(() => {
    setCreatedDate(formatTime(new Date(generateTimestamps().nDaysAgo)));
  }, []);

  return (
    <div className={classes.reviewWrapper}>
      <div className="bg-white p-3">
        <div className="rounded-md flex">
          <ReadMoreText
            text={
              '하오샤브샤브사시미로 4인가족이 먹었어요. 사장님이 정말 그 이더서도 주문하고 계산하시며 자주부터 불쾌 블라블라 으흫으흫 에베베베'
            }
          />
          <Image
            src={placeHolder}
            width={100}
            height={100}
            alt="Review Image"
            className="object-cover rounded-md mr-8"
          />
        </div>
        <KeywordBox
          keywords={[
            { id: 1, keyword: '고기 좋아 불어요' },
            { id: 2, keyword: '맛있어 보이네요' },
            { id: 3, keyword: '안돼요가기싫어요' },
            { id: 4, keyword: '빵점 줄라요' },
            { id: 5, keyword: '직원 짱 구려요' },
          ]}
        />
        <div className="flex items-center">
          {/*  TODO: 임시 데이터 수정 */}
          <ProfileImage
            userId={'rl09VdoqlP-Bsx-3j38H1G1iHUo-o2-swqMGi2JZhGA'}
            profileImageUrl={
              'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/14/16d84d9f-7f3d-498c-a9cb-c4de2ee45655.jpg'
            }
            userName={'김지은'}
            visitDate={createdDate}
          />
          <div className={classes.rating}>
            <StarRatingTooltip rate={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
