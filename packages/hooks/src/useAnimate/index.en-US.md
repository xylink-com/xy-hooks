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

Generate types of animations base on motion values.


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

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| initVal | init value of animation | number | 0 |
| options | options | IOptions | {} |

### Options

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| type | type of animation | TAni | 'Linear' |
| effect | effect of animation | TEffect | 'easeInOut' |
| reverse | reverse animation | boolean | false | 
| repeat | repeat of animation | 'once' | number | Infinity | 1 |

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

| Property | Description | Type |
| -------- | ----------- | ---- |
| value | animation value | number |
| setAnimate | set animation params and start | (endVal: number, duration: number, current?: number = 0) => void |

### setAnimate

| Property | Description | Type |
| -------- | ----------- | ---- |
| endVal | end value of animation | number |
| duration | animation duration(ms) | number |
| current | from current to generate values | number |
