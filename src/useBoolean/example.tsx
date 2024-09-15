/**
 * title: 基础用法
 * description: 切换 boolean，可以接收默认值。
 */
import { Button, Space } from 'antd';
import React from 'react';
import { useBoolean } from 'use-hooks';

export default () => {
  const [state] = useBoolean(true);
  return (
    <>
      <Space direction="vertical">
        <div>value: {JSON.stringify(state.value)}</div>
        <Button onClick={() => state.toggle()}>点击</Button>
      </Space>
    </>
  );
};
