<!--
 * @Date        : 2022-10-19 16:51:54
 * @Author      : ZhouQijun
 * @LastEditors : ZhouQijun
 * @LastEditTime: 2022-10-19 17:39:23
 * @Description : 表格组件
-->
<template>
  <div class="es-pagination">
    <el-pagination
      :background="background"
      v-model:page-size="pageSize"
      v-model:total="total"
      v-model:current-page="currenPage"
    ></el-pagination>
  </div>
</template>

<script setup>
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
