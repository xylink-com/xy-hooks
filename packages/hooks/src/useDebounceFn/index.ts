import React, { useEffect } from 'react';
import { debounce } from '../utils/tool';

type TFn = (e?: Event) => void | undefined;

function useDebounceFn(fn: TFn, delay: number = 300): TFn {
  if(!fn) return fn;

  const run = debounce(fn, delay);
  const debouncedFn = (e: Event) => {
    // @ts-ignore
    run(e);
  };

  return debouncedFn;
}

export default useDebounceFn;
