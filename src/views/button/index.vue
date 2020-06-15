<template>
  <page title="button" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础按钮</p>
        <vill-button title="基础按钮"></vill-button>
      </div>
      <div class="items">
        <p class="item_title">设置圆角，关闭activedStatus</p>
        <vill-button :activedStatus="false" roundRadius="22px">设置圆角，关闭activedStatus</vill-button>
      </div>
      <div class="items">
        <p class="item_title">自定义按钮</p>
        <vill-button :fontSize="22" backgroundColor="red" color="#ffffff" roundRadius="8px" fillPadding="25px">自定义按钮</vill-button>
      </div>
      <div class="items">
        <p class="item_title">禁用按钮</p>
        <vill-button :disabled="true" backgroundColor="red" color="#000000">禁用按钮</vill-button>
      </div>
      <div class="items">
        <p class="item_title">朴素按钮</p>
        <vill-button :plain="true" backgroundColor="red">朴素按钮</vill-button>
      </div>
      <div class="items">
        <p class="item_title">内联按钮</p>
        <vill-button :inline="true" title="内联按钮2"></vill-button>
        <vill-button :inline="true" fillPadding="15px" backgroundColor="orange" :fontSize="18" roundRadius="8px">内联按钮1</vill-button>
      </div>
      <div class="items">
        <p class="item_title">loading</p>
        <vill-button v-model="loading" title="loading"></vill-button>
        <vill-button style="margin-top: 8px" title="控制loading状态" @click="toggleLoading"></vill-button>
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
      loading: true
    }
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
    }
  }
}
</script>