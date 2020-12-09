---
title: useClickPreventionOnDoubleClick
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  path: /dom
legacy: /dom/use-click-prevention-on-double-click
---

# useClickPreventionOnDoubleClick

当 onClick 和 onDoubleClick 同时在一个react元素上监听时，会出现 onDoubleClick 被触发的同时 onClick 也会被触发。useClickPreventionOnDoubleClick 可以让你同时在一个元素上监听 **onClick** 和 **onDoubleClick** 事件且互不干扰。

## Examples

<code src="./demo/normal.tsx" />
<code src="./demo/basic.tsx" />

## API

```ts
const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(
  onClick,
  onDoubleClick,
);
```

### Params

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| onClick | on click handler | (e) => void | |
| onDoubleClick | on click handler | (e) => void | |

### Result

| 参数 | 描述 | 类型 |
| -------- | ----------- | ---- |
| onClick | a controlled handler | (e) => void |
| onDoubleClick | a controlled handler | (e) => void |
