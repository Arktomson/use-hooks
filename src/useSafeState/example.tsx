/**
 * title: 基础用法
 * description: useSafeState的用法
 */
import React, { useEffect, useState } from 'react';
import { useSafeState } from 'use-hooks';

const Child = () => {
  const [value, setValue] = useSafeState<string>();

  useEffect(() => {
    setTimeout(() => {
      setValue('data loaded from server');
    }, 5000);
  }, []);

  const text = value || 'Loading...';

  return <div>{text}</div>;
};

export default () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(false)} type="button">
        Unmount
      </button>
      {visible && <Child />}
    </div>
  );
};
