import { useState, useCallback } from 'react';

type useBooleanReturnType = [
  { value: boolean; toggle: () => void },
  (val: boolean) => void,
];
export const useBoolean = (val: boolean = false) => {
  const [state, setState] = useState(!!val);
  const toggle = useCallback(
    () => setState((latestState) => !latestState),
    [],
  );
  const returnvalue: useBooleanReturnType = [
    { value: state, toggle },
    setState,
  ];
  return returnvalue;
};
