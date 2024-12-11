<div align= "center">
    <h1> <img src="public/readme/logo.png" height=40 align="texttop">nextjs-template-project</h1>
</div>


<p align="center">
This is a out-of-the-box template project for Next.js project.
</p>

<div align="center">

[![Twitter](https://img.shields.io/twitter/follow/XAgent?style=social)]() [![Discord](https://img.shields.io/badge/XAgent-Discord-purple?style=flat)]() [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-green.svg)](https://opensource.org/license/apache-2-0/) ![Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)
</div>

<p align="center">
    <a href="README.md">English</a> •
    <a href="README_ZH.md">中文</a> •
</p>

<p align="center">
  <a href="#quickstart">Tutorial</a> •
  <a href="">Demo</a> •
  <a href="">Blog</a> •
  <a href="">Documentation</a>
</p>


## Features

* Next.js 15
* react 19
* shadcn/ui
* storybook 8
* eslint 9 + oxlint: for linting.
* tailwindcss 3 + cva: for styling
* zustand 5: for global state management
* zod 3: for runtime type checking
* motion (original framer-motion): for animation
* i18next: use /[lanuage]/[page] to discriminate different language pages
* immer: for immutable state management


## QuickStart

First, use your favorite package manager to install the dependencies.

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

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


linting:

```bash
# quicker
yarn oxlint

# full
yarn eslint
```


use storybook for developing components:

```bash
yarn storybook
```

### eslint

Integrated with the following plugins:

| Plugin Name                      | Description                                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------- |
| eslint-plugin-oxlint             | for integrating eslint with oxlint                                                 |
| eslint-plugin-project-struture   | for enforcing project structure                                                    |
| eslint-plugin-boundaries         | for enforcing boundaries between different layers of the application               |
| eslint-plugin-storybook          | official storybook plugin                                                          |
| eslint-plugin-testing-library    | for enforcing best practices for testing while writing storybook testing functions |
| eslint-plugin-tailwindcss        | for enforcing best practices for tailwindcss                                       |
| eslint-plugin-simple-import-sort | for enforcing import order                                                         |
| @eslint/js                       | for enforcing best practices for javascript                                        |
| @stylistic/eslint-plugin         | for enforcing code style                                                           |
| @typescript-eslint/eslint-plugin | for enforcing best practices for typescript                                        |
| eslint-plugin-compat             | for enforcing compatibility with different browsers                                |
| eslint-plugin-react              | for enforcing best practices for react                                             |
| eslint-plugin-jsx-a11y           | for enforcing best practices for accessibility                                     |
| eslint-plugin-functional         | for enforcing best practices for functional programming                            |
| eslint-plugin-promise            | for enforcing best practices for promises                                          |
| eslint-plugin-security           | for enforcing best practices for security                                          |
