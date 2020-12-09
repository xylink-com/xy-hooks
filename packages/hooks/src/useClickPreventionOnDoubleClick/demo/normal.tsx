/**
 * title: Normal situation
 * desc: If you listen the click event and double click at the same time.Things will be like this.
 *
 * title.zh-CN: 通常情况
 * desc.zh-CN: 如果在同一元素上同时监听 onClick 和 onDoubleClick 时间，将会出现的情况。
 */
import React from 'react';

export default () => {
  const ClickableBox = ({ onClick, onDoubleClick }) => {

    return (
      <button onClick={onClick} onDoubleClick={onDoubleClick}>
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
