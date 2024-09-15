/**
 * title: 基础用法
 * description: useLatest 返回的永远是最新值
 */
import React from 'react';
import { useReactive } from 'use-hooks';

export default () => {
  const state = useReactive({
    count: 0,
    inputVal: '',
    obj: {
      value: '',
    },
  });

  return (
    <div>
      <p> state.count：{state.count}</p>

      <button
        style={{ marginRight: 8 }}
        onClick={() => state.count++}
        type="button"
      >
        state.count++
      </button>
      <button onClick={() => state.count--} type="button">
        state.count--
      </button>

      <p style={{ marginTop: 20 }}> state.inputVal: {state.inputVal}</p>
      <input onChange={(e) => (state.inputVal = e.target.value)} />

      <p style={{ marginTop: 20 }}> state.obj.value: {state.obj.value}</p>
      <input onChange={(e) => (state.obj.value = e.target.value)} />
    </div>
  );
};
