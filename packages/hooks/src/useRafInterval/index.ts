import React, { useEffect, useRef, useState } from 'react';

export class RafTimer {
  constructor() {
    this.intervalTimer = 0;
  }

  intervalTimer: number;

  setInterval = (cb: Function, interval: number) => {
    let stime: number = Date.now();
    let etime: number = stime;

    const loop: FrameRequestCallback = () => {
      this.intervalTimer = requestAnimationFrame(loop);

      etime = Date.now();

      if (etime - stime >= interval) {
        stime = Date.now();
        etime = stime;
        cb();
      }
    };
    this.intervalTimer = requestAnimationFrame(loop);
  };
  clearInterval = () => {
    cancelAnimationFrame(this.intervalTimer);
  };
}

type TDelay = number | null | undefined;

interface IOptions{
  immediate?: boolean;
  raf?: boolean;
}

const NOOP = () => {}

function useRafInterval(
  fn: () => void = NOOP,
  delay: TDelay,
  options: IOptions = {},
): [
  TDelay,
  number,
  {
    setInterval: (interval: number) => void,
    reset: () => void,
    clear: () => void,
  }
] {
  const immediate = options?.immediate || false;
  const raf = options?.raf || false;

  const fnRef = useRef<() => void>();
  // 当 fnRef 变化时保证重新挂载
  fnRef.current = fn;
  const countRef = useRef<number>(0);
  const timerRef = useRef<number | undefined>(undefined);
  const [timerInterval, setTimerInterval] = useState<TDelay>(delay);

  useEffect(() => {
    window.clearInterval(timerRef.current);

    if (timerInterval === undefined || timerInterval === null) return;
    if (immediate) {
      countRef.current += 1;
      fnRef.current?.();
    }

    let setInterval: any = window.setInterval;
    let clearInterval: any = window.clearInterval;

    if (raf) {
      const rafTimer = new RafTimer();
      setInterval = rafTimer.setInterval;
      clearInterval = rafTimer.clearInterval;
    }
    timerRef.current = setInterval(() => {
      countRef.current += 1;
      fnRef.current?.();
    }, timerInterval);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [timerInterval, timerInterval]);

  function reset() {
    setTimerInterval(delay);
  }

  function clear() {
    setTimerInterval(null);
  }

  return [
    timerInterval,
    countRef.current,
    {
      setInterval: setTimerInterval,
      reset,
      clear,
    },
  ];
}

export default useRafInterval;
