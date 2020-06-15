<template>
  <page title="selectBar" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础</p>
        <vill-select-bar titleText="已选择" buttonText="确认"/>
      </div>
      <div class="items">
        <p class="item_title">自定义</p>
        <vill-select-bar
          titleText="已选择"
          buttonText="确认"
          buttonBackgroundColor="orange"
          buttonColor="#cccccc"
          :buttonFontSize="16"
          :height="38"
          value="商品1"
        />
      </div>
      <div class="items">
        <p class="item_title">禁用按钮</p>
        <vill-select-bar
          titleText="已选择"
          buttonText="确认"
          :buttonDisabled="true"
        />
      </div>
      <div class="items">
        <p class="item_title">自定义禁用按钮</p>
        <vill-select-bar
          titleText="已选择"
          buttonText="确认"
          :buttonDisabled="true"
          disabledBackgroundColor="red"
        />
      </div>
      <div class="items">
        <p class="item_title">loading</p>
        <vill-select-bar
          titleText="已选择"
          buttonText="确认"
          v-model="loading"
        />
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
  created() {
    setTimeout(() => {
      this.loading = false
      console.log(this.loading)
    }, 3000)
  },
}
</script>