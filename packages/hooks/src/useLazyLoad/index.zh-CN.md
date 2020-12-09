---
title: useLazyLoad
nav:
  title: Hooks
  path: /hooks
group:
  title: Dom
  path: /dom
legacy: /dom/use-lazy-load
---

# useLazyLoad

通过 IntersectionObserver API 实现的图片懒加载，支持预加载 loading 图片。

## Examples

<code src="./demo/basic.tsx" />
可打开 Chrome 开发者开具 network 栏查看 image 的加载情况。

## API

```ts
import { useLazyLoad } from 'xy-hooks';
useLazyLoad();
```

### Params

| 参数 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| originSrc | 加载资源的原始的标签属性 | string | 'src'|
| fakeSrc | 虚拟加载资源的 dataset 标签属性 | string | 'src'(that would be 'data=src') |
| loading | 默认的 loading | string | defaultLoading |
