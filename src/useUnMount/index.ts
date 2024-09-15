import { useEffect } from 'react';
import { useLatest } from 'use-hooks';
import { unMountFunction } from './type';

export const useUnmount = (fn: unMountFunction) => {
  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current?.();
    },
    [],
  );
};
