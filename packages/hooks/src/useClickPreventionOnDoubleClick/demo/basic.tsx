/**
 * title: Basic Usage
 * desc: Listening onClick and onDoubleClick
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 同时监听 onClick 和 onDoubleClick
 */
import React, { useState } from 'react';
import { useClickPreventionOnDoubleClick } from 'xy-hooks';

export default () => {
  const [single, setSingle] = useState(0);
  const [double, setDouble] = useState(0);

  const ClickableBox = ({ onClick, onDoubleClick }) => {
    const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
      onClick,
      onDoubleClick,
    );

    return (
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Click or double click
      </button>
    );
  };

  return (
    <>
      <p>
        Single: {single} | Double: {double}
      </p>
      <ClickableBox
        onClick={() => {
          console.log('on click');
          setSingle(single + 1);
        }}
        onDoubleClick={() => {
          console.log('on double click');
          setDouble(double + 1);
        }}
      />
    </>
  );
};
