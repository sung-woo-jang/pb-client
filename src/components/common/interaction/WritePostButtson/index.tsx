import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import * as React from 'react';
import { useRouter } from 'next/navigation';

interface WritePostButtsonProps {
  placeId: number;
}

export default function WritePostButtson({ placeId }: WritePostButtsonProps) {
  const router = useRouter();
  const writePostButtonClickHandler = () => {
    router.push(`/review/${placeId}`);
  };

  return (
    <button
      className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      onClick={writePostButtonClickHandler}
    >
      <CreateOutlinedIcon className="w-5 h-5 mr-2" />
      <span>글쓰기</span>
    </button>
  );
}
