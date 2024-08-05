import classes from '@/app/place/results/[id]/styles.module.scss';
import PlacePickIcon from '@/components/common/interaction/PlacePickIcon';
import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';
import StarIcon from '@/components/Icon/StarIcon';

export default function PsResultDescription() {
  return (
    <div className="mt-4 ml-2">
      <h2 className="text-xl font-bold">영미리찻집 하오샤브샤브</h2>
      <div className={classes.summary}>
        <StarIcon className="h-4 w-4 text-yellow-400" />
        <span className="ml-1">2.78</span>
        <span className="mx-1">&#183;</span>
        <span>리뷰 416</span>
        <span className="mx-1">&#183;</span>
        <span>팔로워 리뷰 27</span>
      </div>
      <div className={classes.summary}>
        <LocateIcon className="h-4 w-4 mr-1" />
        <span>서울특별시 중구 세종대로 124</span>
        <ChevronDownIcon className="h-4 w-4 ml-1" />
      </div>
      <div className="flex items-center mt-4">
        <PlacePickIcon />
      </div>
    </div>
  );
}

function LocateIcon(props: any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
