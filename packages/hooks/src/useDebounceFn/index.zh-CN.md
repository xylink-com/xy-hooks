---
title: useDebounceFn
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  path: /dom
legacy: /dom/use-debounce-fn
---

# useDebounceFn

## Examples

<code src="./demo/basic.tsx" />

## API

```ts
import { useDebounceFn } from 'xy-hooks';
const handleClick = useDebounceFn(() => setCount(count + 1), 500);
```

### Params

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| fn | handler | TFn |  |
| delay | delay of debounce | number | 300 |

### Result

| 参数 | 描述 | 类型 |
| -------- | ----------- | ---- |
| debouncedFn | debounced handler | TFn |

### Types

```ts
type TFn = (e?: Event) => void | undefined;
```
