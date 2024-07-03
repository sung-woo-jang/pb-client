import { Dispatch, SetStateAction, useCallback, useState } from 'react';

// useBoolean Hooks의 반환값을 정의.
interface UseBooleanOutput {
  value: boolean; // 현재 boolean 값
  setValue: Dispatch<SetStateAction<boolean>>; // boolean 값을 직접 설정하는 함수
  setTrue: () => void; // boolean 값을 true로 설정하는 함수
  setFalse: () => void; // boolean 값을 false로 설정하는 함수
  toggle: () => void; // boolean 값을 반전하는 함수
}

/**
 * Boolean 상태를 효과적으로 다루기 위한 커스텀 훅
 * @param defaultValue 초기 상태 값 (선택 사항)
 * @returns { UseBooleanOutput } useBoolean 훅의 반환 값
 */
export default function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
}
