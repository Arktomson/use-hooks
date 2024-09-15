import { message } from 'antd';
import React, { useRef } from 'react';
import { useClickOutside } from 'use-hooks';

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    message.info('点击了外部区域');
  });
  return (
    <div>
      <div
        ref={ref}
        style={{
          width: '100px',
          height: '100px',
          background: 'purple',
        }}
      ></div>
    </div>
  );
};
