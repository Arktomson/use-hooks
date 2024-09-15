/**
 * title: 基础用法
 * description: 强制组件重新渲染。
 */
import React from 'react';
import { useUpdate } from 'use-hooks';

export default () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: '8px' }}>
        update
      </button>
    </>
  );
};
