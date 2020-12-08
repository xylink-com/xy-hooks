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

Common interval implements by setInterval and requestAnimationFrame, support start interval immediately and usage of setInterval、 reset interval and clear interval.

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

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| fn | run with interval ticks | () => void |  NOOP |
| delay | delay for interval | TDelay: number(ms) / null / undefined | undefined |
| options | options for interval | IOptions | |

### Options

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| immediate | immediately run or wait a tick | boolean | false |
| raf | use raf or not | boolean | false |

### Result

| Property | Description | Type |
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
