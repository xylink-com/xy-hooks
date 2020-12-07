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

获取元素滚动的位置信息，包括已经滚动的宽度和高度、滚动容器的宽度和高度、剩余未滚动部分的宽度和高度。
基于 ahooks 中的useScroll。

## Examples

<code src="./demo/basicScroll.tsx" />
<code src="./demo/documentScroll.tsx" />
<code src="./demo/controlledScroll.tsx" />

## API

``` ts
const position = useScrollPlus(target, shouldUpdate);
```

### Params

| 参数         | 描述                  | 类型                                                                                  | 默认值     |
| ------------ | --------------------- | ------------------------------------------------------------------------------------- | ---------- |
| target       | DOM 节点或者 Ref 对象 | HTMLElement \| (() => HTMLElement) \| Document \| React. MutableRefObject             | `Document` |
| shouldUpdate | 控制是否更新滚动信息  | `({ top: number, left: number}) => boolean  | ({ top: number, left: number}) => true` |

### Result

| 参数     | 描述                    | 类型                                                                                                 |
| -------- | ----------------------- | ---------------------------------------------------------------------------------------------------- |
| position | 滚动容器的滚动位置信息. | `{ top: number, left: number, width: number, height: number, leftWidth: number, leftHeight: number}` |

### position

* top: 滚动容器已经滚动的高度。
* left: 滚动容器已经滚动的宽度。
* width: 滚动容器的宽度。
* height: 滚动容器的高度。
* leftWidth: 滚动容器剩余未滚动的宽度。
* leftHeight: 滚动容器剩余未滚动的高度。
