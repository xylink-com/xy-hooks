/**
 * title: Debounced Click
 * desc: The button click handler will be debounced.
 *
 * title.zh-CN: 单击防抖
 * desc.zh-CN: 按钮点击将会防抖。
 */
import React, { useState } from 'react';
import { useDebounceFn } from 'xy-hooks';

export default () => {
  const [count, setCount] = useState(0);

  const handleClick = useDebounceFn(() => setCount(count + 1), 500);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>Click fast</button>
    </div>
  );
};
