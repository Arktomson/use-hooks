import React from 'react';
import { useBoolean } from '../useBoolean'; // 使用相对路径导入
import { Button, Space } from 'antd';

export default () => {

  const [{ value: state, toggle }, setState] = useBoolean(false);

  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return (
    <Space>
      <p>State: {String(state)}</p>
      <Button onClick={toggle}>Toggle</Button>
      <Button onClick={setTrue}>Set True</Button>
      <Button onClick={setFalse}>Set False</Button>
    </Space>
  );
};