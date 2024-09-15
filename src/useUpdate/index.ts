import { useCallback, useState } from 'react';

export const useUpdate = () => {
  const [, set] = useState({});
  return useCallback(() => set({}), []);
};
