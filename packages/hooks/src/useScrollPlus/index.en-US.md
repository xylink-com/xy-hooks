---
title: useScrollPlus
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  path: /dom
legacy: /dom/use-scroll-plus
---

# useScrollPlus

Get the scroll position details of an element, include scrolled position, container size and scroll left size.
Base on useScroll from ahooks.

## Examples

<code src="./demo/basicScroll.tsx" />
<code src="./demo/documentScroll.tsx" />
<code src="./demo/controlledScroll.tsx" />

## API

``` ts
const position = useScrollPlus(target, shouldUpdate);
```

### Params

| Property     | Description                           | Type                                                                      | Default                                  |
| ------------ | ------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------- |
| target       | DOM element or Ref object             | HTMLElement \| (() => HTMLElement) \| Document \| React. MutableRefObject | `Document`                               |
| shouldUpdate | controll weather update scroll status | ({ top: number, left: number}) => boolean                                 | `({ top: number, left: number}) => true` |

### Result

| Property | Description                                 | Type                                                                                                 |
| -------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| position | The current scroll position of the element. | `{ top: number, left: number, width: number, height: number, leftWidth: number, leftHeight: number}` |

### position

* top: top height scrolled.
* left: left width scrolled.
* width: width of container or document.
* height: height of container or document.
* leftWidth: height scrolled left from bottom.
* leftHeight: width scrolled left from right.
