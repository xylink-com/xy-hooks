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

useCancellablePromises hooks keeps a array of cancelable promises with api of append、remove and clear.
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

### Result

| Property | Description | Type |
| -------- | ----------- | ---- |
| clearPendingPromises | clear pending promises | () => void |
| appendPendingPromise | append pending promise | (promise) => pendingPromises |
| removePendingPromise | remove pending promise | (promise) => void |

### pendingPromises
| Property | Description | Type |
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
