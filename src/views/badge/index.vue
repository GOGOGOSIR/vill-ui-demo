<template>
  <page title="badge" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础用法</p>
        <div class="item_inline">
          <vill-badge
            :value="110"
            :max="99"
          />
        </div>
        <div class="item_inline">
          <vill-badge
            :value="1"
          />
        </div>
      </div>
      <div class="items">
        <p class="item_title">自定义</p>
        <div class="item_inline">
          <vill-badge
            :value="110"
            color="#cccccc"
            backgroundColor="orange"
          />
        </div>
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
