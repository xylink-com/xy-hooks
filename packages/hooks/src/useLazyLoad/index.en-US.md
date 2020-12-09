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

lazy load for images implements by IntersectionObserver, supporting default loading image.

## Examples

<code src="./demo/basic.tsx" />
open chrome dev tools of network tab to see what happened.

## API

```ts
import { useLazyLoad } from 'xy-hooks';
useLazyLoad();
```

### Params

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| originSrc | origin tag attr to load source | string | 'src'|
| fakeSrc | fake tag dataset attr to load source | string | 'src'(that would be 'data=src') |
| loading | loading for lazy loaded images | string | defaultLoading |
