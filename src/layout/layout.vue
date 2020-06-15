<template>
  <div class="layout">
    <router-view></router-view>
  </div>
</template>
<script>
const LAYOUT_NAME = 'layout'
export default {
  name: LAYOUT_NAME
}
</script>
<style lang="scss" scoped>
.layout{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffffff;
}
</style>