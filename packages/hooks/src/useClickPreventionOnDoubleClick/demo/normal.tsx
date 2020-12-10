/**
 * title: Normal situation
 * desc: If you listen the click event and double click at the same time.Things will be like this.
 *
 * title.zh-CN: 通常情况
 * desc.zh-CN: 如果在同一元素上同时监听 onClick 和 onDoubleClick 时间，将会出现的情况。
 */
import React, { useState } from 'react';

export default () => {
  const [single, setSingle] = useState(0);
  const [double, setDouble] = useState(0);

  return (
    <>
      <p>
        Single: {single} | Double: {double}
      </p>
      <button
        onClick={() => {
          console.log('on click');
          setSingle(single + 1);
        }}
        onDoubleClick={() => {
          console.log('on double click');
          setDouble(double + 1);
        }}
      >
        Click or Double Click
      </button>
    </>
  );
};
