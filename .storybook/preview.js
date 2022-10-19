/*
 * @Date        : 2022-10-19 15:13:08
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-19 16:36:17
 * @Description :
 */
import { app } from '@storybook/vue3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
