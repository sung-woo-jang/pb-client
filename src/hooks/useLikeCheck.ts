import useGetMyInfo from '@/api/auth/getMyInfo';
import { useEffect, useState } from 'react';
import * as _ from 'lodash';

function useLikeCheck(likes: { user_id: string }[]) {
  const { data: myInfo, isSuccess } = useGetMyInfo();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    isSuccess && _.some(likes, { user_id: myInfo.id })
      ? setIsChecked(true)
      : setIsChecked(false);
  }, [likes, myInfo, isSuccess]);

  return { isChecked, setIsChecked };
}

export default useLikeCheck;
