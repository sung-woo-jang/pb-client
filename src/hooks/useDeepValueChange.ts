import { useCallback, useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

function useDeepValueChange<T>(value: T, onChange?: () => void) {
  const prevValueRef = useRef<T>();

  const checkChange = useCallback(() => {
    if (!isEqual(prevValueRef.current, value)) {
      if (onChange) {
        onChange();
      }

      // 객체나 배열인 경우 새로운 참조 생성
      prevValueRef.current = Array.isArray(value)
        ? ([...value] as T)
        : ({ ...value } as T);
    }
  }, [value, onChange]);

  useEffect(() => {
    checkChange();
  }, [checkChange]);

  return checkChange;
}

export default useDeepValueChange;
