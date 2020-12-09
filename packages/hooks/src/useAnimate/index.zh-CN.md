---
title: useAnimate
nav:
  title: Hooks
  path: /hooks
group:
  title: Animate
  path: /animate
legacy: /animate/use-animate
---

# useAnimate

基于贝塞尔曲线值生成不同类型的 css 动画。


## Examples

<code src="./demo/basic.tsx" />
<code src="./demo/reverse.tsx" />
<code src="./demo/repeat.tsx" />
<code src="./demo/type.tsx" />
<code src="./demo/complex.tsx" />

## API

```ts
import { useAnimate } from 'xy-hooks';
const [opacity, setOpacity] = useAnimate(0.5, { type: 'Elastic', effect: 'easeInOut', reverse: true });
```

### Params

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| initVal | 开始值 | number | 0 |
| options | 可选项 | IOptions | {} |

### Options

| 参数 | 描述 | 类型 | 默认值 |
| -------- | ----------- | ---- | ------- |
| type | 动画类型 | TAni | 'Linear' |
| effect | 动画效果 | TEffect | 'easeInOut' |
| reverse | 反转动画 | boolean | false |
| repeat | 重复动画 | 'once' | number | Infinity | 1 |

### Types

```ts
export type TAni =
  | 'Linear'
  | 'Quad'
  | 'Cubic'
  | 'Quart'
  | 'Quint'
  | 'Sine'
  | 'Expo'
  | 'Circ'
  | 'Elastic'
  | 'Back'
  | 'Bounce';

export type TEffect = 'easeIn' | 'easeOut' | 'easeInOut';
export type TRepeat = 'once' | number | Infinity;

export interface IOptions {
  type?: TAni;
  effect?: TEffect;
  reverse?: boolean;
  repeat?: TRepeat;
}
```

### Result

| 参数 | 描述 | 类型 |
| -------- | ----------- | ---- |
| value | 结果值 | number |
| setAnimate | 设置并开始动画 | (endVal: number, duration: number, current?: number = 0) => void |

### setAnimate

| 参数 | 描述 | 类型 |
| -------- | ----------- | ---- |
| endVal | 结束值 | number |
| duration | 动画时长 | number |
| current | 生成动画的当前值 | number |
