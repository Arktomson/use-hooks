import { useEffect, useRef } from 'react';

const map = new WeakMap();
const ob = new ResizeObserver(
  (entries: ResizeObserverEntry[]) => {
    for (let ele of entries) {
      const handler = map.get(ele.target);
      handler && handler(ele);
    }
  },
);
export const useResize = (
  cb: (entry: ResizeObserverEntry) => void,
) => {
  if (typeof cb !== 'function') {
    throw new TypeError(
      'The parameter should be a callback function',
    );
  }
  const observerRef = useRef(null!);

  useEffect(() => {
    if (!observerRef.current) {
      throw new TypeError(
        '"The parameter 1 should be of type Element',
      );
    }
    ob.observe(observerRef.current);
    return () => {
      ob.unobserve(observerRef.current);
    };
  }, []);
  useEffect(() => {
    map.set(observerRef.current, cb);
  }, [cb]);
  return observerRef;
};
