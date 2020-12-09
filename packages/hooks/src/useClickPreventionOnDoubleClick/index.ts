import React from 'react';
import useCancellablePromises from '../useCancellablePromises';
import { sleep } from '../utils/test';

const useClickPreventionOnDoubleClick = (onClick, onDoubleClick) => {
  const {
    clearPendingPromises,
    appendPendingPromise,
    removePendingPromise,
  } = useCancellablePromises();

  const handleClick = () => {
    clearPendingPromises();
    // a 300ms will be wait
    const waitForClick = appendPendingPromise(sleep(300));

    return waitForClick.promise
      // 300ms is end, trigger on click handler, otherwise a new click event will clearPendingPromises.
      .then(() => {
        removePendingPromise(waitForClick);
        onClick();
      })
      .catch(({ isCanceled, error }) => {
        removePendingPromise(waitForClick);
        if (!isCanceled) {
          throw error;
        }
      });
  };

  const handleDoubleClick = () => {
    clearPendingPromises();
    onDoubleClick();
  };

  return [handleClick, handleDoubleClick];
};

export default useClickPreventionOnDoubleClick;
