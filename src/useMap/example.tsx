/**
 * title: 基础用法
 * description: 使用方法操作map
 */
import { Button, InputNumber, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { useMap } from 'use-hooks';

export default () => {
  const map = useMap<number, string>([
    [1, Math.random().toString().substring(0, 5)],
    [2, Math.random().toString().substring(0, 5)],
    [3, Math.random().toString().substring(0, 5)],
  ]);

  const [key, setKey] = useState<number | null>(null);
  const [val, setVal] = useState<string | null>(null);

  const generate = useCallback(() => {
    return [...map.value].map((it) => (
      <Space direction="horizontal">
        <div>{it[0]}</div>
        <div>{it[1]}</div>
      </Space>
    ));
  }, [map]);

  return (
    <>
      <Space direction="vertical">
        <InputNumber
          value={key}
          onChange={(value) => {
            setKey(value);
          }}
        />
        <Button>{val || 'null'}</Button>
        <Space>
          <Button
            onClick={() =>
              key && map.set(key, String(Math.random()).substring(0, 5))
            }
          >
            set
          </Button>
          <Button onClick={() => key && map.remove(key)}>delete</Button>
          <Button onClick={() => map.reset()}>reset</Button>
          <Button onClick={() => map.clear()}>clear</Button>
          <Button
            onClick={() => {
              if (key) {
                const val = map.get(key);
                setVal(val || 'undefined');
                return;
              }
            }}
          >
            get
          </Button>
          <Button
            onClick={() => {
              map.setAll([
                [1, 'setAll'],
                [2, 'setAll'],
              ]);
            }}
          >
            setAll
          </Button>
        </Space>
        {generate()}
      </Space>
    </>
  );
};
