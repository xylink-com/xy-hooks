// ---------- 获得数组中的下标项 ---------- //
export function ArrayItem(arr, index) {
  if (index < 0) index = arr.length + index;
  return arr[index];
}

// ---------- 判断是否是函数 ---------- //
export function isFunction(obj: any): obj is Function {
  return typeof obj === 'function';
}

// ---------- 对象深拷贝 ---------- //
export const deepCopy = (obj: any) => {
  const result: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        result[key] = deepCopy(obj[key]); // 递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
};

// ---------- 将毫秒时间转化为 hh:mm:ss的格式 ---------- //
export const formatTime = (time: number): string => {
  const sep: string = ':';
  const totalSeconds: number = Math.floor(time / 1000);
  const second: number = totalSeconds % 60;
  const totalMinutes: number = (totalSeconds - second) / 60;
  const minute: number = totalMinutes % 60;
  const hour: number = (totalMinutes - minute) / 60;
  return padDigit(hour) + sep + padDigit(minute) + sep + padDigit(second);
};

// ---------- 将数字转化为两位，填充0 ---------- //
export const padDigit = (num: number): string => (num < 10 ? '0' + num : '' + num);

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

// ---------- 获得当前的时间，格式：YYYY-MM-DD HH:mm ---------- //
export const now = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${year}/${month}/${day} ${hour}/${minute}`;
};
