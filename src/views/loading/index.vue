<template>
  <page title="loading" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">默认</p>
        <vill-loading />
      </div>
      <div class="items">
        <p class="item_title">自定义</p>
        <vill-loading size="60" color="orange" />
      </div>
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin]
}
</script>
