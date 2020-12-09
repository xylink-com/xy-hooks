/**
 * title: Reverse Animation
 * desc: click the box, margin left of the box moves from 10px to 300px in 1s and reverse. The animation will reverse automatically.
 *
 * title.zh-CN: 恢复动画
 * desc.zh-CN: 点击 div，div 的 margin left 将在 1s 内 从 10px 移动到 300px, 并返回。动画将会恢复。
 */
import React, { useState } from 'react';
import { useAnimate } from 'xy-hooks';

export default function Ani() {
  const [value, setAnimate] = useAnimate(10, { type: 'Quad', effect: 'easeInOut', reverse: true });

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
