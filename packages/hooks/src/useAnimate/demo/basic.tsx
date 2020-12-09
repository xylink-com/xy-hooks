/**
 * title: Basic Usage
 * desc: click the box, margin left of the box moves from 10px to 300px in 1s.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 点击 div，div 的 margin left 将在 1s 内 从 10px 移动到 300px。
 */
import React, { useState } from 'react';
import { useAnimate } from 'xy-hooks';

export default function Ani() {
  const [value, setAnimate] = useAnimate(10, { type: 'Quad', effect: 'easeInOut' });

  return (
    <div
      onClick={() => {
        setAnimate(300, 1000);
      }}
    >
      <div
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'red',
          marginLeft: value,
        }}
      ></div>
    </div>
  );
}
