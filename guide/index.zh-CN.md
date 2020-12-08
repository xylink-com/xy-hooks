---
title: xy-hooks - React Hooks Library
hero:
  title: a hooks library
  desc: 为 React Hooks 而生
  actions:
    - text: 快速上手
      link: /zh-CN/pages/getting-started
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/813f5ed9-6bc4-43d4-9f74-ec81ecf35733/k7htg6n4_w144_h144.png
    title: 内容丰富
    desc: 拥有丰富的自定义 Hooks，每个 Hooks 都有丰富的在线示例供您体验。
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/7659205c-6637-4fa2-8529-d32e5818304b/k7htflfb_w144_h144.png
    title: 完备的教程
    desc: 包含适合全年龄段的丰富的 React Hooks 教程，想学 React Hooks，来这里就够了。
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/6319a122-e8b8-497f-9b45-37cfbe77edaa/k7htfx7t_w144_h144.png
    title: 生产可用
    desc: 已经过足够大量的线上系统的考验及打磨，健壮性值得信赖。
footer: Open-source MIT Licensed | Copyright © 2020-xylink
---

## 📚 文档

- [English](https://xylink-com.github.io/xy-hooks/)
- [中文](https://xylink-com.github.io/xy-hooks/zh-CN)

## ✨ 特性

- 易学易用
- 包含大量提炼自应用的高级 Hooks。
- 包含丰富的基础 Hooks。
- 使用 TypeScript 构建，提供完整的类型定义文件。

## 📦 安装

```
npm i xy-hooks --save
```

## 🔨 使用

```
import { useRafInterval } from 'xy-hooks';
```
## 🤝 参与贡献

```
$ git clone git@github.com:xylink-com/xy-hooks.git
$ cd xy-hooks
$ npm run init
$ npm start
```

打开浏览器访问 http://127.0.0.1:8000

如果你有更多的想法，欢迎提交 request: [Pull request](https://github.com/xylink-com/xy-hooks/pulls)

## 快速开始

你可以复制 `example 文件夹` 快速开发您的 hook 应用。然后在 `index.ts` 中注册您的 hook。

## 🤡  演示与文档

1. 在你的组件目录的 demo 目录里编写你的 demo 案例。
2. 在 index.zh-CN.md 文件中编写 中文文档，在 index.en-US.md 中编写英文文档。
3. 将你的 demo 使用`code`标签嵌入文档中，就像这样：
  
```ts
<code src="./demo/basicScroll.tsx" />
```
你可以嵌入多个 demo 展示展示不同的使用效果。

4. 通过命令 `yarn build:doc` 生成静态文档，生成的静态文档将会在你的代码合并到 `master分支` 之后更新到 Github Pages.

## 👥 交流讨论

欢迎在 issues 提出您的想法： [Push issues](https://github.com/xylink-com/xy-hooks/issues)

## ✅ License

[MIT](https://github.com/xylink-com/xy-hooks/blob/master/LICENSE)
```
