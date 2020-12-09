import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Tween } from './tween';
import { requestAnimationFrame } from '../utils/polyfill';

export type TAni =
  | 'Linear'
  | 'Quad'
  | 'Cubic'
  | 'Quart'
  | 'Quint'
  | 'Sine'
  | 'Expo'
  | 'Circ'
  | 'Elastic'
  | 'Back'
  | 'Bounce';

export type TEffect = 'easeIn' | 'easeOut' | 'easeInOut';
export type TRepeat = number | typeof Infinity;

export interface IOptions {
  type?: TAni;
  effect?: TEffect;
  reverse?: boolean;
  repeat?: TRepeat;
}

/**
 *
 * @param initVal 动画初始值
 * @param options type: 'Linear' | 'Quad' | 'Cubic' | 'Quart' | 'Quint' | 'Sine' | 'Expo' | 'Circ' | 'Elastic' | 'Back' | 'Bounce'
 * @param options effect: "easeIn" | "easeOut" | "easeInOut"
 */
export default function useAnimate(initVal: number = 0, options: IOptions = {}) {
  const { type = 'Linear', effect = 'easeInOut', reverse = false, repeat = 1 } = options;
  const [value, setValue] = useState(initVal);
  let AnimateType: any = null;
  const repeatRef = useRef<number>(repeat);

  if (type === 'Linear' as TAni) {
    AnimateType = Tween[type];
  } else {
    AnimateType = Tween[type][effect];
  }

  const setAnimate = useCallback(
    (endVal: number, duration: number, current: number = 0) => {
      let cur = current;
      repeatRef.current = repeat;
      if (reverse) duration /= 2;
      function reverseStep() {
        cur = cur + 17;
        if (cur >= duration) {
          setValue(initVal);
          cur = current;
          repeatAni();
        } else {
          requestAnimationFrame(reverseStep);
          setValue(AnimateType?.(cur, endVal, initVal - endVal, duration));
        }
      }

      function repeatAni() {
        repeatRef.current -= 1;
        if (repeatRef.current > 0) step();
      }

      function step() {
        cur = cur + 17;
        if (cur >= duration) {
          setValue(endVal);
          cur = current;
          if (!reverse) {
            repeatAni();
          }
          if (reverse) {
            reverseStep();
          }
        } else {
          requestAnimationFrame(step);
          setValue(AnimateType?.(cur, initVal, endVal - initVal, duration));
        }
      }
      step();
    },
    [Object.values(options).join(''), initVal],
  );

  return [value, setAnimate];
}

export { Tween };
