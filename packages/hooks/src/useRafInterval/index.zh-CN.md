---
title: useRafInterval
nav:
  title: Hooks
  path: /hooks
group:
  title: sideEffect
  path: /side-effect
legacy: /side-effect/use-raf-interval
---

# useRafInterval

基于 setInterval 和 requestAnimationFrame 实现的定时器，支持开启定时器立即执行回调、重置定时器和清除定时器。查看 API 以了解详细的使用方法。

## Examples

<code src="./demo/basic.tsx" />
<code src="./demo/raf.tsx" />

## API

```ts
import { useRafInterval } from 'xy-hooks';
const [interval, counts, { setInterval, reset, clear }] = useRafInterval(
  () => {
    setCount(count + 2);
  },
  1000,
  { immediate: true, raf: true },
);
```

### Params

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| fn | run with interval ticks | () => void |  NOOP |
| delay | delay for interval | TDelay: number(ms) / null / undefined | undefined |
| options | options for interval | IOptions | |

### Options

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| immediate | immediately run or wait a tick | boolean | false |
| raf | use raf or not | boolean | false |

### Result

| 参数 | 描述 | 类型 |
| -------- | ----------- | ---- |
| interval | current interval | number(ms) |
| counts | counts for run times | number |
| setInterval | update interval for timer |(interval: number) => void |
| reset | reset interval | () => void |
| clear | clear interval(stop interval) | () => void |

### Types

```ts
type TDelay = number | null | undefined;

interface IOptions{
  immediate?: boolean;
  raf?: boolean;
}

const NOOP = () => {}
```
