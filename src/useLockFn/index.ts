import { useCallback, useRef } from 'react';

export const useLockFn = <T extends any[] = any[], K = any>(
  fn: (...args: T) => Promise<K>,
) => {
  const lock = useRef(false);

  return useCallback(
    async (...args: T) => {
      // return不能放到try里面,不然会触发finally导致失效
      if (lock.current) return;
      try {
        lock.current = true;

        return await fn(...args);
      } finally {
        lock.current = false;
      }
    },
    [fn],
  );
};
