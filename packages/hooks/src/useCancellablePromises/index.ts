import React, { useRef } from 'react';

export const cancellablePromise = (promise) => {
  let isCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (value) => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
      (error) => reject({ isCanceled, error }),
    );
  });

  return {
    promise: wrappedPromise,
    cancel: () => (isCanceled = true),
  };
};

interface IPromise {
  promise: Promise<unknown>;
  cancel: () => boolean;
}

const useCancellablePromises = () => {
  const pendingPromises = useRef<IPromise[]>([]);

  const appendPendingPromise = (promise) => {
    const objPromise = cancellablePromise(promise);
    pendingPromises.current = [...pendingPromises.current, objPromise];
    return objPromise;
  };

  const removePendingPromise = (promise) =>
    (pendingPromises.current = pendingPromises.current.filter((p) => p !== promise));

  const clearPendingPromises = () => pendingPromises.current.map((p) => p.cancel());

  return {
    appendPendingPromise,
    removePendingPromise,
    clearPendingPromises,
  };
};

export default useCancellablePromises;
