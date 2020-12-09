/**
 * title: Different Animations
 * desc: Different animations controls by values.
 *
 * title.zh-CN: 控制多个动画
 * desc.zh-CN: 同时控制多个动画。
 */
import React, { useState } from 'react';
import { useAnimate } from 'xy-hooks';

export default function Ani() {
  const [move, setMove] = useAnimate(40, { type: 'Bounce', effect: 'easeInOut', reverse: true });
  const [color, setColor] = useAnimate(0, { type: 'Back', effect: 'easeInOut', reverse: true });
  const [size, setSize] = useAnimate(40, { type: 'Elastic', effect: 'easeInOut', reverse: true });
  const [rotate, setRotate] = useAnimate(0, {
    type: 'Elastic',
    effect: 'easeInOut',
    reverse: true,
  });
  const [opacity, setOpacity] = useAnimate(0.5, {
    type: 'Elastic',
    effect: 'easeInOut',
    reverse: true,
  });

  return (
    <div
      style={{
        position: 'relative',
        height: 200,
      }}
    >
      <div
        style={{
          height: size,
          width: size,
          backgroundColor: `rgb(${color}, ${255 - color}, ${color})`,
          position: 'absolute',
          left: move,
          top: move,
          transform: `rotate(${rotate}deg)`,
          opacity,
        }}
      ></div>
      {/* FIXME 防抖处理 */}
      <button
        onClick={() => {
          setMove(300, 1000);
          setColor(255, 1000);
          setSize(80, 1000);
          setRotate(360, 1000);
          setOpacity(1, 1000);
        }}
      >
        start
      </button>
    </div>
  );
}
