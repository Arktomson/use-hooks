import { useCallback, useMemo, useRef, useState } from 'react';

// type initialState = Array<[T, K]>;
export const useMap = <T, K>(initialState: Iterable<[T, K]> = []) => {
  const [map, setMap] = useState(new Map(initialState));
  const resetValue = useRef(initialState);

  const set = useCallback((key: T, value: K): void => {
    setMap((prevMap) => new Map([...prevMap, [key, value]]));
  }, []);
  const remove = useCallback((key: T): void => {
    setMap((prevMap) => {
      prevMap.delete(key);
      return new Map(prevMap);
    });
  }, []);
  const reset = useCallback((): void => {
    setMap(new Map(resetValue.current));
  }, []);
  const get = useCallback(
    (key: T): K | undefined => {
      return map.get(key);
    },
    [map],
  );
  const setAll = useCallback((newMap: Iterable<[T, K]> = []): void => {
    setMap(new Map(newMap));
  }, []);

  const clear = useCallback((): void => {
    setMap(new Map());
  }, []);

  return useMemo(
    () => ({
      value: map,
      set,
      remove,
      reset,
      get,
      clear,
      setAll,
    }),
    [map],
  );
};
