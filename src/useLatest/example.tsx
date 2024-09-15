/**
 * title: 基础用法
 * description: useLatest 返回的永远是最新值
 */
import React, { useEffect, useState } from 'react';
import { useLatest } from 'use-hooks';

export default () => {
  const [cnt, setCnt] = useState(0);
  const ref = useLatest(cnt);

  useEffect(() => {
    setInterval(() => {
      setCnt(ref.current + 1);
    }, 1000);
  }, []);
  return <>{cnt}</>;
};
