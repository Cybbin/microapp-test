<template>
  <div class="tool-box">
    我是共享子组件ToolBox
    <ToolItem />
  </div>
</template>

<script setup>
import ToolItem from './ToolItem.vue'
</script>

<style>
.tool-box {
  background-color: #ccc;
}
</style>