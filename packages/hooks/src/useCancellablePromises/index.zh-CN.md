---
title: useCancellablePromises
nav:
  title: Hooks
  path: /hooks
group:
  title: Tool
  path: /tool
legacy: /tool/use-cancellable-promises
---

# useCancellablePromises

useCancellablePromises 在内部维持一个可以取消的 promise 数组，支持添加、删除和清除的 API。
## Examples

<code src="./demo/basic.tsx" />

## API

```ts
import {useCancellablePromises} from 'xy-hooks';
const {
  clearPendingPromises,
  appendPendingPromise,
  removePendingPromise,
} = useCancellablePromises();
```

### Params

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| clearPendingPromises | clear pending promises | () => void |
| appendPendingPromise | append pending promise | (promise) => pendingPromises |
| removePendingPromise | remove pending promise | (promise) => void |

### Result

| 参数 | 描述 | 类型 |
| -------- | ----------- | ---- |
| promise | a cancelable promise | Promise |
| cancel | cancel the pending promise | () => boolean |

### Types

```ts
interface IPromise {
  promise: Promise<unknown>;
  cancel: () => boolean;
}
```
