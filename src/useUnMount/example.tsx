/**
 * title: 基础用法
 * description: 在组件`卸载`时，执行方法。
 */
import { Button, message, Space } from 'antd';
import React, { useState } from 'react';
import { useUnmount } from 'use-hooks';

const Header = () => {
  const [cnt, setCnt] = useState(0);

  useUnmount(() => {
    message.info('destoryed: ' + cnt);
  });
  return (
    <Space>
      <div>{cnt}</div>
      <Button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        按钮
      </Button>
    </Space>
  );
};
export default () => {
  const [isShow, setIshow] = useState(true);

  return (
    <>
      <Space direction="vertical">
        {isShow && <Header />}
        <button
          onClick={() => {
            setIshow(isShow ? false : true);
          }}
          type="button"
        >
          点击toggle
        </button>
      </Space>
    </>
  );
};
