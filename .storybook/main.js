/*
 * @Date        : 2022-10-19 15:13:08
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-21 11:59:04
 * @Description :
 */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue3',
  core: {
    //NOTE 打包时遇到错误
    // builder: '@storybook/builder-vite',
    builder: 'webpack5',
  },
  features: {
    storyStoreV7: true,
  },
}
