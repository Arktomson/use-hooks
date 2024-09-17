import { useEffect, useRef } from 'react';

const map = new WeakMap();
const ob = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
  for (let ele of entries) {
    const handler = map.get(ele.target);
    handler?.(ele, ob);
  }
});
export const useIntersection = <T extends HTMLElement>(
  cb: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => void,
) => {
  if (typeof cb !== 'function') {
    throw new TypeError('The parameter should be a callback function');
  }
  const observerRef = useRef<T>(null!);

  useEffect(() => {
    if (!observerRef.current) {
      throw new TypeError('"The parameter 1 should be of type Element');
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
