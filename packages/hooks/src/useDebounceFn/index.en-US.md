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

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| fn | handler | TFn |  |
| delay | delay of debounce | number | 300 |

### Result

| Property | Description | Type |
| -------- | ----------- | ---- |
| debouncedFn | debounced handler | TFn |

### Types

```ts
type TFn = (e?: Event) => void | undefined;
```
