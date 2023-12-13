<template>
  <svg aria-hidden="true">
    <use :xlink:href="'#'+name"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: String
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>