// -------------------------------------------------- //
// -------------------------------------------------- //
// ------------- Object 相关工具 --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //

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