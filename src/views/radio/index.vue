<template>
  <page title="radio" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">radio的基础用法</p>
        <vill-radio-group
          v-model="val_1"
          :options="options1"
          labelPosition="left"
          optionLabelKey="text"
        />
        <p class="item_change">{{val_1}}</p>
      </div>
      <div class="items">
        <p class="item_title">radio的横向排列</p>
        <vill-radio-group
          v-model="val_2"
          :options="options2"
          horizontal
          :column="2"
        />
        <p class="item_change">{{val_2}}</p>
      </div>
      <div class="items">
        <p class="item_title">radio插槽</p>
        <vill-radio-group
        >
          <vill-radio v-model="val_3" option="1">华为</vill-radio>
          <vill-radio v-model="val_3" option="2">中兴</vill-radio>
          <vill-radio v-model="val_3" option="3" disabled>苹果</vill-radio>
        </vill-radio-group>
        <p class="item_change">{{val_3}}</p>
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
      val_1: 4,
      options1: [{
        value: 1,
        text: '苹果'
      }, {
        value: 2,
        text: '香蕉'
      }, {
        value: 3,
        text: '橘子'
      }, {
        value: 4,
        text: '菠萝',
        disabled: true
      }],
      val_2:1,
      options2: [{
        value: 1,
        label: '苹果'
      }, {
        value: 2,
        label: '香蕉'
      }, {
        value: 3,
        label: '橘子'
      }, {
        value: 4,
        label: '菠萝'
      }],
      val_3: ''
    }
  }
}
</script>
