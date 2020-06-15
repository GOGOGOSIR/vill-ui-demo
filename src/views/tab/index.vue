<template>
  <page title="tab" @handleNavLeftClick="back">
    <template #main>
      <div class="items" style="margin-bottom: 400px">
        <p class="item_title">基础用法</p>
        <vill-tab
          v-model="value"
          :options="options"
          labelKey="name"
          @change="handleChange"
          @click="handleClick"
        />
        <p class="item_change">{{value}}</p>
      </div>
      <div class="items" style="margin-bottom: 300px">
        <p class="item_title">sticky</p>
        <vill-tab
          v-model="value1"
          :options="options2"
          :sticky="true"
          :stickyOffsetTop="-15"
          :lineWidth="30"
          :lineHeight="4"
        />
        <p class="item_change" style="height: 400px; background:rgb(19, 187, 134); color: #fff ">{{value1}}</p>
      </div>
      <div class="items" style="padding-bottom: 400px">
        <p class="item_title">自定义</p>
        <vill-tab
          v-model="value2"
          :options="options"
          labelKey="name"
          background="orange"
          color="#ffffff"
          activeColor="#cccccc"
          :border="false"
          :showMoveLine="false"
        />
        <p class="item_change">{{value2}}</p>
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
      options: [{
        name: '全部订单全部订单全部订单'
      }, {
        name: '待收货'
      }, {
        name: '已完成'
      }, {
        name: '售后'
      }],
      options2:[],
      value: 1,
      value1: 0,
      value2: 2
    }
  },
  created() {
    this.getOptions()
  },
  methods: {
    getOptions() {
      setTimeout(() => {
        this.options2 = [
          '苹果',
          '香蕉',
          '葡萄',
          '桃子',
          '哈密瓜'
        ]
      }, 200)
    },

    handleChange(index) {
      console.log('change', index)
    },

    handleClick(result) {
      const { data, index } = result

      console.log('click', data, index)
    }
  }
}
</script>
