<template>
  <page title="textarea" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础用法</p>
        <vill-textarea
          v-model="value_1"
          placeholder="请输入内容"
          :maxlength="100"
        />
        <p class="item_change">{{value_1}}</p>
      </div>
      <div class="items">
        <p class="item_title">禁用</p>
        <vill-textarea
          v-model="value_2"
          placeholder="请输入内容"
          disabled
        />
        <p class="item_change">{{value_2}}</p>
      </div>
      <div class="items">
        <p class="item_title">只读</p>
        <vill-textarea
          v-model="value_3"
          placeholder="请输入内容"
          readonly
        />
        <p class="item_change">{{value_3}}</p>
      </div>
      <div class="items">
        <p class="item_title">自定义</p>
        <vill-textarea
          v-model="value_4"
          placeholder="请输入内容"
          :maxlength="10"
          :autofocus="true"
          :height="200"
          :showLimitCount="false"
          @change="handleChange"
        />
        <p class="item_change">{{value_4}}</p>
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
      value_1: '',
      value_2: '',
      value_3: 'lalal',
      value_4: ''
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>
