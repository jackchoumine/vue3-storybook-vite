# vue3-storybook-vite

This is a project template created using vue3+storybook+vite.

## Project Setup

```sh
yarn
```

### Launch storybook

```sh
yarn storybook
```

## 遇到的问题

> build-storybook error: The 'compilation' argument must be an instance of Compilation

两种解决方案

升级打包工具：

```sh
npm install @storybook/builder-webpack5 @storybook/manager-webpack5 --save-dev
```

修改 `./storybook/main.js`:

```js
 core: {
    //NOTE 打包时遇到错误
    // "builder": "@storybook/builder-vite"
    builder: 'webpack5',
  },
```

[问题详情](https://github.com/storybookjs/storybook/issues/17014#issuecomment-1256904918)

或者升级 storybook

```sh
npx storybook@latest upgrade
```

不修改`./storybook/main.js`

## 参考

[Getting started with Storybook in Vue 3](https://blog.logrocket.com/getting-started-storybook-vue-3/)
