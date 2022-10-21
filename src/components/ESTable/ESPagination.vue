<!--
 * @Date        : 2022-10-19 16:51:54
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-21 11:08:18
 * @Description : 表格组件
-->
<template>
  <div class="es-pagination">
    <ElPagination
      :background="background"
      v-model:page-size="pageSize"
      v-model:total="total"
      v-model:current-page="currenPage"
    ></ElPagination>
    <h2>quasar 测试</h2>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="amber" glossy label="Amber" />
      <q-btn color="brown-5" label="Brown 5" />
      <q-btn color="deep-orange" glossy label="Deep Orange" />
      <q-btn color="purple" label="Purple" />
      <q-btn color="black" label="Black" />
    </div>
  </div>
</template>

<script setup>
import { ElPagination } from 'element-plus'
import 'element-plus/es/components/pagination/style/css'
defineProps({
  background: {
    type: Boolean,
  },
  pageSize: {
    type: Number,
  },
  total: {
    type: Number,
  },
  currenPage: {
    type: Number,
  },
})
</script>
