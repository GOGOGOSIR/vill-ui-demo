<template>
  <page title="picker" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">单列picker</p>
        <vill-button title="单列picker" @click="visible=true"></vill-button>
      </div>
      <div class="items">
        <p class="item_title">多列picker</p>
        <vill-button title="多列picker" @click="visible2=true"></vill-button>
      </div>
      <vill-picker
        v-model="visible"
        :data="datalist"
        title="我是标题"
      >
      </vill-picker>
      <vill-picker
        v-model="visible2"
        :data="datalist2"
        :selectedIndex="selectedIndex2"
        @change="handleChange"
        @select="handleSelect"
        @value-change="handleValueChange"
      >
      </vill-picker>
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin],
  data () {
    return {
      visible: false,
      visible2: false,
      datalist: [
        [{
            value: 1,
            label: '苹果'
          }, {
            value: 2,
            label: '黄桃'
        }]
      ],
      datalist2: [],
      selectedIndex2: []
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      setTimeout(() => {
        this.datalist2 = [
          [{
              value: 1,
              label: '苹果'
            }, {
              value: 2,
              label: '黄桃'
          }],
          [{
              value: 11,
              label: '苹果1'
            }, {
              value: 22,
              label: '黄桃2'
          }],
        ]
        this.selectedIndex2=[0,1]
      }, 2000)
    },
    handleChange(column, targetIndex) {
      console.log(column, targetIndex)
    },
    handleSelect(values, targetIndex, labels) {
      console.log('handleSelect', values, targetIndex, labels)
    },
    handleValueChange(values, targetIndex, labels) {
      console.log('handleValueChange', values, targetIndex, labels)
    }
  }
}
</script>
