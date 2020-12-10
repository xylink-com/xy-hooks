// -------------------------------------------------- //
// -------------------------------------------------- //
// ----------------- 其他通用工具 --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //

// ---------- 防抖 ---------- //
export function debounce(fn: any, delay: number) {
  let timer: any = null;

  return function () {
    // @ts-ignore
    const _this = this;
    const args: any = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  };
}

// ---------- setTimeout 实现节流 ---------- //
function throttle(fn: any, delay: number) {
  var timer: any = null;
  return function () {
    // @ts-ignore
    var _this = this;
    var args: any = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
      timer = null;
    }, delay);
  };
}

// ---------- 时间戳实现节流 ---------- //
function throttleByTimestamp(fn: any, delay: number) {
  var previous: number = 0;

  return function () {
    // @ts-ignore
    var _this = this;
    var args: any = arguments;
    var now = new Date().getTime();
    if (now - previous > delay) {
      fn.apply(_this, args);
      previous = now;
    }
  };
}
