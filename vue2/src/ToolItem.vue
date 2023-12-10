<template>
  <div class="tool-item">subitem<button @click="doSomething">点击</button></div>
</template>

<script setup>
import { doSomething } from './api'
</script>

<style>
.tool-item {
  border: 1px solid purple;
  background-color: #eee;
}
</style>