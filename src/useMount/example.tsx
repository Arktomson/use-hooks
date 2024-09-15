/**
 * title: 基础用法
 * description: 在组件`首次渲染`时，执行方法。
 */
import React, { useState } from 'react';
import { useMount } from 'use-hooks';

export default () => {
  const [count, setCount] = useState(1);

  useMount(() => {
    setCount(2);
  });
  return <>{count}</>;
};
