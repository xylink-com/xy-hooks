export function clearCacheAddr(addr: string) {
  const ran = new Date().getTime();
  if (addr.indexOf('?') < 0) {
    return `${addr}?t=${ran}`;
  } else {
    return `${addr}&t=${ran}`;
  }
}
