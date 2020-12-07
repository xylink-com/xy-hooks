import React, { useState, useEffect } from 'react';
import { BasicTarget, getTargetElement } from '../utils/dom';

export type TTarget = BasicTarget<HTMLElement | Document>;

export interface IPosition {
  top: number;
  left: number;
  width: number;
  height: number;
  leftWidth: number;
  leftHeight: number;
}

export type TScrollListenController = (val: IPosition) => boolean;

function useScrollPlus(
  target?: TTarget,
  shouldUpdate: TScrollListenController = (val) => true,
): IPosition {
  const [position, setPosition] = useState<IPosition>({} as IPosition);
  const el: any = getTargetElement(target, document);

  if (!el) return {} as IPosition;

  useEffect(() => {
    function updatePosition(target: TTarget): void {
      let scrollEl: any = target;

      if (target === document) {
        scrollEl = document.scrollingElement;
        if (!scrollEl) return;
      }

      const newPos: IPosition = {
        top: scrollEl?.scrollTop,
        left: scrollEl?.scrollLeft,
        width: scrollEl?.clientWidth,
        height: scrollEl?.clientHeight,
        leftWidth: scrollEl?.scrollWidth - scrollEl?.scrollLeft - scrollEl?.clientWidth,
        leftHeight: scrollEl?.scrollHeight - scrollEl?.scrollTop - scrollEl?.clientHeight,
      };

      if (shouldUpdate(newPos)) setPosition(newPos);
    }

    function listener(event: Event): void {
      if (!event.target) return;
      updatePosition(event.target as TTarget);
    }

    updatePosition(el as TTarget);

    el.addEventListener('scroll', listener);

    return () => el.removeEventListener('scroll', listener);
  }, [target]);

  return position;
}

export default useScrollPlus;
