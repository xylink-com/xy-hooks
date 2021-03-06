// -------------------------------------------------- //
// -------------------------------------------------- //
// ------------- 常用方法的兼容性写法 ------------------ //
// -------------------------------------------------- //
// -------------------------------------------------- //

const millSecsPerFrame: number = 17;
export const requestAnimationFrame = (() => {
  return (
    requestAnimationFrame ||
    function (fn) {
      setTimeout(fn, millSecsPerFrame);
    }
  );
})();