/*
 * @Date        : 2022-10-19 15:13:08
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-19 17:57:27
 * @Description :
 */
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
