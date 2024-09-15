import { useEffect, useRef } from 'react';

export const useUnMountedRef = (): {
  readonly current: boolean;
} => {
  const unMountedRef = useRef<boolean>(false);
  useEffect(() => {
    unMountedRef.current = false;
    return () => {
      unMountedRef.current = true;
    };
  }, []);
  return unMountedRef;
};
