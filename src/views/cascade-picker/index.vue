<template>
  <page title="cascade-picker" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">联级picker</p>
        <vill-button title="联级picker" @click="cascadeVisibles=true"></vill-button>
      </div>
      <vill-cascade-picker
        v-model="cascadeVisibles"
        :data="cascadeData"
        :selectedIndex="value"
        @change="handleCascadePickerChange"
        @select="handleCascadePickerSelect"
      />
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin],
  data () {
    return {
      cascadeVisibles: false,
      cascadeData: [],
      value: []
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      setTimeout(() => {
        this.cascadeData = [{
          value: 1,
          label: '水果',
          children: [{
            value: 11,
            label: '苹果',
            children: [{
              value: 111,
              label: '红苹果'
            }, {
              value: 112,
              label: '金苹果'
            }, {
              value: 113,
              label: '绿苹果'
            }]
          }, {
            value: 12,
            label: '桃子'
          }]
        }, {
          value: 2,
          label: '饮料',
          children: [{
            value: 21,
            label: '咖啡'
          }, {
            value: 22,
            label: '茶',
            children: [{
              value: 221,
              label: '红茶'
            }, {
              value: 222,
              label: '茉莉花茶'
            }, {
              value: 223,
              label: '绿茶'
            }]
          }]
        }]
        this.value = [0, 0, 2]
      }, 2000)
    },

    handleCascadePickerChange(column, targetSelectedIndex) {
      console.log('chnage', column, targetSelectedIndex)
    },

    handleCascadePickerSelect(pickerSelectedValue, pickerSelectedIndex, pickerSelectedLabel) {
      console.log(pickerSelectedValue, pickerSelectedIndex, pickerSelectedLabel)
    },
  }
}
</script>
