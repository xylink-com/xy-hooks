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

When you use onClick and onDoubleClick of React in the same element at the same time, you may encounter a matter that double click handler been trigger with click handler been trigger too.That's the solution for this situation that you can listen to the click event and double click event at the same time.

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

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| onClick | on click handler | (e) => void | |
| onDoubleClick | on click handler | (e) => void | |

### Result

| Property | Description | Type |
| -------- | ----------- | ---- |
| onClick | a controlled handler | (e) => void |
| onDoubleClick | a controlled handler | (e) => void |
