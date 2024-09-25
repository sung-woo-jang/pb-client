import WestIcon from '@mui/icons-material/West';
import ContentsBox from '@/components/common/ContentsBox';
import * as React from 'react';
import Link from 'next/link';
import useCreatePost from '@/api/post/createPost';
import { useAppSelector } from '@/hooks/redux-hooks';
import usePostEditor from '@/store/slice/postEditor/usePostEditor';
import isNull from 'lodash/isNull';
import { useRouter } from 'next/navigation';

interface IExitAreaProps {
  placeId: number;
}

export default function ExitArea({ placeId }: IExitAreaProps) {
  const { mutate } = useCreatePost();
  const { content, placeImages, visitDate, rate } = useAppSelector(
    (state) => state.postEditor
  );
  const { keywords } = usePostEditor();
  const router = useRouter();
  const createPostMutateHandler = () => {
    if (isNull(placeImages)) {
      console.log('이미지 없음');
      return;
    }
    if (isNull(visitDate)) {
      console.log('방문일자 없음');
      return;
    }

    mutate(
      {
        keywords,
        content,
        placeId,
        placeImages,
        visitDate: visitDate.toDate(),
        rate,
      },
      {
        onSuccess: (response) => {
          const { data } = response;
          router.push(`/timeline/${data.id}`);
        },
      }
    );
  };
  return (
    <ContentsBox>
      <div className="flex items-center justify-between">
        <Link href={'/'} className="text-lg font-bold">
          <WestIcon className="w-6 h-6 mr-2" />
          나가기
        </Link>
        <button className="text-lg font-bold" onClick={createPostMutateHandler}>
          등록
        </button>
      </div>
    </ContentsBox>
  );
}
