import ChevronDownIcon from '@/components/Icon/ChevronDownIcon';
import HeartIcon from '@/components/Icon/HeartIcon';
import BookmarkIcon from '@/components/Icon/BookmarkIcon';
import FilePenIcon from '@/components/Icon/FilePenIcon';
import Image from 'next/image';

export default function ResultBox() {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm m-3">
      <div className="flex justify-between mb-2">
        <div>
          <h2 className="text-lg font-semibold">스타벅스 무교로점</h2>
          <p className="text-sm text-muted-foreground">카페</p>
          <div className="flex items-center ">
            <p className="flex">
              서울특별시 중구 무교로 15{' '}
              <ChevronDownIcon className="text-muted-foreground mt-1" />
            </p>
          </div>
        </div>
        <Image
          src={'/placeholder.svg'}
          alt={'image1'}
          width={120}
          height={120}
        />
      </div>

      <div className="flex items-center mb-2">
        <HeartIcon className="w-6 h-6 text-red-500" />
        <p className="ml-1 text-lg font-semibold">3</p>
      </div>
      <div className="flex items-center justify-around border-t pt-2">
        <button className="flex items-center">
          <FilePenIcon className="w-4 h-4 mr-1" />
          글쓰기
        </button>
        <button className="flex items-center">
          <BookmarkIcon className="w-4 h-4 mr-1" />
          폴픽
        </button>
      </div>
    </div>
  );
}
