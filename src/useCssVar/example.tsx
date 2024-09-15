/**
 * title: 基础用法
 * description: 切换颜色值
 */
import React, { useEffect, useRef, useState } from 'react';
import { useCssVar } from 'use-hooks';
import './example.css';
export default () => {
  const domRef = useRef(null!);

  const [get, set] = useCssVar(domRef);
  const [curColor, setCurColor] = useState<string | null>(null);

  useEffect(() => {
    const curColor = get('--color');
    if (curColor) setCurColor(curColor);
  }, []);
  return (
    <>
      <div className="main" ref={domRef}></div>
      <div>get: {curColor} </div>
      <div
        onClick={() => {
          set(
            '--color',
            `rgb(${Math.random() * 255},${Math.random() * 255},${
              Math.random() * 255
            })`,
          );
          const curColor = get('--color');
          if (curColor) setCurColor(curColor);
        }}
      >
        点击
      </div>
    </>
  );
};
