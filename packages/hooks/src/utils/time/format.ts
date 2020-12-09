// -------------------------------------------------- //
// -------------------------------------------------- //
// ----------------- 时间相关工具 --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //

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
