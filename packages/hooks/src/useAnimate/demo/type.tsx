/**
 * title: Types of Animation
 * desc: different types of animation.
 *
 * title.zh-CN: 动画类型
 * desc.zh-CN: 动画的不同类型。
 */
import React, { useState } from 'react';
import { useAnimate } from 'xy-hooks';

export default function Ani() {
  const [type, setType] = useState('Linear');
  const [value, setAnimate] = useAnimate(10, { type: type, effect: 'easeInOut', reverse: true });

  return (
    <div>
      <div
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'red',
          marginLeft: value,
        }}
        onClick={(e) => {
          setAnimate(300, 1000);
        }}
      ></div>
      <div
        style={{
          marginTop: 40,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <button onClick={() => setType('Linear')}>Linear</button>
        <button onClick={() => setType('Quad')}>Quad</button>
        <button onClick={() => setType('Cubic')}>Cubic</button>
        <button onClick={() => setType('Quart')}>Quart</button>
        <button onClick={() => setType('Quint')}>Quint</button>
        <button onClick={() => setType('Sine')}>Sine</button>
        <button onClick={() => setType('Expo')}>Expo</button>
        <button onClick={() => setType('Circ')}>Circ</button>
        <button onClick={() => setType('Elastic')}>Elastic</button>
        <button onClick={() => setType('Back')}>Back</button>
        <button onClick={() => setType('Bounce')}>Bounce</button>
      </div>
    </div>
  );
}
