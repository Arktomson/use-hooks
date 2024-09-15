/**
 * title: 基础用法
 * description: 元素尺寸显示
 */
import React, { useState } from 'react';
import { useResize } from 'use-hooks';

export default () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [width1, setWidth1] = useState(0);
  const [height1, setHeight1] = useState(0);
  const domRef = useResize((entry) => {
    setWidth(entry.borderBoxSize[0].inlineSize);
    setHeight(entry.borderBoxSize[0].blockSize);
  });
  const domRef1 = useResize((entry) => {
    setWidth1(entry.borderBoxSize[0].inlineSize);
    setHeight1(entry.borderBoxSize[0].blockSize);
  });
  return (
    <div>
      <div
        ref={domRef}
        style={{
          resize: 'both',
          width: '200px',
          height: '200px',
          border: '1px solid',
          overflow: 'auto',
        }}
      >
        observing
      </div>

      <div>width: {width}</div>
      <div>height: {height}</div>

      <div
        ref={domRef1}
        style={{
          resize: 'both',
          width: '200px',
          height: '200px',
          border: '1px solid',
          overflow: 'auto',
        }}
      >
        observing
      </div>

      <div>width: {width1}</div>
      <div>height: {height1}</div>
    </div>
  );
};
