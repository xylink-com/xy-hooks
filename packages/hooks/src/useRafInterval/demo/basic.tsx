/**
 * title: Basic Usage
 * desc: Set interval, reset interval and clear interval via setInterval.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 通过 setInterval 实现的setInterval, Reset 和 Clear 定时器的用法。
 */
import React, { useState } from 'react';
import { useRafInterval } from 'xy-hooks';

export default () => {
  const [count, setCount] = useState(0);
  const [interval, counts, { setInterval, reset, clear }] = useRafInterval(
    () => {
      setCount(count + 2);
    },
    1000,
    { immediate: true, raf: false },
  );
  return (
    <div>
      <p>
        当前值：{count} 执行次数：{counts} internal: {interval}
      </p>
      <div
        style={{
          cursor: 'pointer',
        }}
      >
        <button onClick={() => setInterval(5000)}>Set interval 5000</button>
        <button onClick={reset} style={{ marginLeft: 8 }}>
          Reset
        </button>
        <button onClick={clear} style={{ marginLeft: 8 }}>
          Clear
        </button>
      </div>
    </div>
  );
};
