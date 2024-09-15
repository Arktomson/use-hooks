import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';
import { useUnMountedRef } from 'use-hooks';

export function useSafeState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>];
export function useSafeState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
];
export function useSafeState<S>(initialState?: S | (() => S)) {
  const unmountedRef: { current: boolean } = useUnMountedRef();
  const [state, setState] = useState(initialState);
  const setCurrentState = useCallback((currentState: any) => {
    if (unmountedRef.current) return;
    setState(currentState);
  }, []);

  return [state, setCurrentState] as const;
}
