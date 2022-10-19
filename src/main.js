/*
 * @Date        : 2022-10-19 15:13:08
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-19 17:55:50
 * @Description : 项目入口
 */
import { createApp } from 'vue'
import App from './App.vue'

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
// Import Quasar css
import 'quasar/dist/quasar.css'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

import './assets/main.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')
