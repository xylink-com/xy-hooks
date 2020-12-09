import React, { useEffect } from 'react';
import 'intersection-observer';
import { createLogicalAnd } from 'typescript';

const defaultLoading: string =
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1744558263,856016303&fm=26&gp=0.jpg';

function useLazyLoad(
  originSrc: string = 'src',
  fakeSrc: string = 'src',
  loading: string = defaultLoading,
): void {
  useEffect(() => {
    const targets = document.querySelectorAll(`img[data-${fakeSrc}]`);
    if (!targets.length) return () => {};
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        const { isIntersecting, target } = entry;
        let targetEl = target as any;
        if (isIntersecting) {
          targetEl.src = targetEl.dataset.src;
          intersectionObserver.unobserve(targetEl);
        }
      });
    });

    targets.forEach((target: any) => {
      target.src = loading;
      intersectionObserver.observe(target);
    });

    return () => intersectionObserver.disconnect();
  }, [originSrc, fakeSrc]);
}

export default useLazyLoad;
