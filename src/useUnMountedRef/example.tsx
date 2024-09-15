/**
 * title: 基础用法
 * description: unmountedRef.current 代表组件是否已经卸载
 */
import { message } from 'antd';
import React, { useEffect } from 'react';
import { useBoolean, useUnMountedRef } from 'use-hooks';

const MyComponent = () => {
  const unmountedRef = useUnMountedRef();
  useEffect(() => {
    setTimeout(() => {
      if (!unmountedRef.current) {
        message.info('component is alive');
      }
    }, 3000);
  }, []);

  return <p>Hello World!</p>;
};

export default () => {
  const [state] = useBoolean(true);

  return (
    <>
      <button type="button" onClick={state.toggle}>
        {state.value ? 'unmount' : 'mount'}
      </button>
      {state.value && <MyComponent />}
    </>
  );
};
