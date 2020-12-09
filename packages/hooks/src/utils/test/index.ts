// -------------------------------------------------- //
// -------------------------------------------------- //
// ----------------- 测试相关工具 --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //

// ---------- 睡眠 ---------- //
export function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}