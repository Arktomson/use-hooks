import { useEffect, type RefObject } from 'react';

export const useClickOutside = (
  dom: RefObject<HTMLElement>,
  fn: () => void,
) => {
  useEffect(() => {
    console.log('更新');

    const clickAdFn = (e: MouseEvent) => {
      if (
        dom?.current &&
        !dom?.current?.contains(e.target as Node)
      ) {
        fn?.();
      }
    };
    document.addEventListener('click', clickAdFn);
    return () => {
      document.removeEventListener('click', clickAdFn);
    };
  }, [dom, fn]);
};
