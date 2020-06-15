<template>
  <page title="switch" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">switch的基础用法</p>
        <vill-switch v-model="value_1" @change="handleChange">单组switch</vill-switch>
        <p class="item_change">{{value_1}}</p>
      </div>
      <div class="items">
        <p class="item_title">单组switch-禁用</p>
        <vill-switch labelPosition="left" :fillSpace="20" v-model="value_2" :disabled="true">单组switch</vill-switch>
        <p class="item_change">{{value_2}}</p>
      </div>
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin],
  data() {
    return {
      value_1: false,
      value_2: true
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>
