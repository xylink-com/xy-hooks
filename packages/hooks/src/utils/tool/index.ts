// -------------------------------------------------- //
// -------------------------------------------------- //
// ----------------- 其他通用工具 --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //

// ---------- 防抖 ---------- //
export const debounce = function (fn: any, delay: number) {
  let timeout: any;
  return function () {
    clearTimeout(timeout);
    // @ts-ignore
    const context = this;
    const args: any = arguments;
    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};