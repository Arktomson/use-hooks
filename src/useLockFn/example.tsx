/**
 * title: 基础用法
 * description: 场景示例
 */
import { message } from 'antd';
import React, { useState } from 'react';
import { useLockFn } from 'use-hooks';

function mockApiRequest() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default () => {
  const [count, setCount] = useState(0);

  const submit = useLockFn(async () => {
    message.info('Start to submit');
    await mockApiRequest();
    setCount((val) => val + 1);
    message.success('Submit finished');
  });

  return (
    <>
      <p>Submit count: {count}</p>
      <button
        type="button"
        onClick={() => {
          submit();
        }}
      >
        Submit
      </button>
    </>
  );
};
