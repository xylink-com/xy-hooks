/**
 * title: Basic Usage
 * desc: Listening onClick and onDoubleClick 
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 同时监听 onClick 和 onDoubleClick 
 */
import React from 'react';
import { useClickPreventionOnDoubleClick } from 'xy-hooks';

export default () => {
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
    <ClickableBox
      onClick={() => console.log('on click')}
      onDoubleClick={() => console.log('on double click')}
    />
  );
};
