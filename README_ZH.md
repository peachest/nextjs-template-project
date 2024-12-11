<div align= "center">
    <h1> <img src="public/readme/logo.png" height=40 align="texttop"> nextjs-template-project</h1>
</div>

<p align="center">
这是一个开箱即用的 Next.js 项目的模板项目。
</p>


<div align="center">

[![Twitter](https://img.shields.io/twitter/follow/XAgent?style=social)]() [![Discord](https://img.shields.io/badge/XAgent-Discord-purple?style=flat)]() [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/license/apache-2-0/) ![Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)
</div>

<p align="center">
    <a href="README.md">English</a> •
    <a href="README_ZH.md">中文</a> •
</p>

<p align="center">
  <a href="#quickstart">教程</a> •
  <a href="">示例</a> •
  <a href="">博客</a> •
  <a href="">文档</a>
</p>


## Features

* Next.js 15
* react 19
* shadcn/ui
* storybook 8
* eslint 9 + oxlint: 静态代码分析
* tailwindcss 3 + cva: 用样式
* zustand 5:全局状态管理
* zod 3: 运行时类型检查
* motion (original framer-motion): 动画
* i18next: 用 /[lanuage]/[page] URL 区分不同语言页面
* immer: 不可变状态管理

## QuickStart

首先，使用您喜欢的包管理器安装依赖。

Yarn:

```bash
# use yarn classic
corepack use yarn@1.22.22

# use yarn 4.x
corepack use yarn@latest
```

NPM:

```bash
corepack use npm@latest
```

PNPM:

```bash
corepack use pnpm@latest
```

其次，运行开发服务器：

```bash
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看结果。


静态代码检查

```bash
# quicker
yarn oxlint

# full
yarn eslint
```

使用 storybook 开发组件：
```bash
yarn storybook
```

### eslint

eslint 配置中集成了以下插件：

| Plugin Name                      | Description                                 |
| -------------------------------- | ------------------------------------------- |
| eslint-plugin-oxlint             | 集成 oxlint                                 |
| eslint-plugin-project-struture   | 限制项目结构                                |
| eslint-plugin-boundaries         | 限制导入边界                                |
| eslint-plugin-storybook          | 官方 storybook 插件                         |
| eslint-plugin-testing-library    | 在编写 storybook 测试函数时强制执行最佳实践 |
| eslint-plugin-tailwindcss        | 强制执行 tailwindcss 的最佳实践             |
| eslint-plugin-simple-import-sort | 强制执行导入顺序                            |
| @eslint/js                       | 强制执行 javascript 的最佳实践              |
| @stylistic/eslint-plugin         | 强制执行代码风格的最佳实践                  |
| @typescript-eslint/eslint-plugin | 强制执行 typescript 的最佳实践              |
| eslint-plugin-compat             | 强制执行兼容性检查                          |
| eslint-plugin-react              | 强制执行 react 的最佳实践                   |
| eslint-plugin-jsx-a11y           | 强制执行 jsx-a11y 的最佳实践                |
| eslint-plugin-functional         | 强制执行函数式编程的最佳实践                |
| eslint-plugin-promise            | 强制执行 promise 的最佳实践                 |
| eslint-plugin-security           | 强制执行安全的最佳实践                      |
