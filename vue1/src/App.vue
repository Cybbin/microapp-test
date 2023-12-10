<template>
  <div id="app">
    <div style="border: 1px solid blue;">
      <h1>父应用</h1>
      <div style="margin-bottom: 40px;">
        <ToolBox></ToolBox>
      </div>

      <micro-app name='my-app' url='http://localhost:8081/#/page1'></micro-app>
    </div>
  </div>
</template>

<script setup>
import microApplication from '@micro-zoe/micro-app'
import ToolBox from 'vue2Module/ToolBox'

microApplication.start()
</script>

<style>
</style>
