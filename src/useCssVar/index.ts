export const useCssVar = (domRef: React.RefObject<HTMLElement>) => {
  const set = (key: string, val: string): void => {
    if (domRef.current) {
      domRef.current.style.setProperty(key, val);
    }
  };
  const get = (key: string): string | undefined => {
    if (domRef.current) {
      return getComputedStyle(domRef.current).getPropertyValue(key).trim();
    }
  };

  return [get, set] as const;
};
