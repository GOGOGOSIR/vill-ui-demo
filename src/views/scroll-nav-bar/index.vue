<template>
  <page title="scrollNavBar" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">横向滚动插槽（数据量很多）</p>
        <vill-scroll-nav-bar
          v-model="index"
          direction="horizontal"
          :list="list"
          @click="handleClick"
          @change="handleChange"
        >
          <template #default="{data, index}">
            <span>{{data + '_' + index}}</span>
          </template>
        </vill-scroll-nav-bar>
        <p class="item_change">{{index}}</p>
      </div>
      <div class="items">
        <p class="item_title">横向滚动（数据量很少）</p>
        <vill-scroll-nav-bar
          direction="horizontal"
          :list="list.slice(0, 3)"
          padding="10px 15px"
          :fontSize="14"
        />
      </div>
      <div class="items">
        <p class="item_title">纵向滚动</p>
        <div class="v_w">
          <vill-scroll-nav-bar
            v-model="index"
            direction="vertical"
            :list="h_list"
            labelKey="text"
            valueKey="val"
          />
        </div>
      </div>
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin],
  data () {
    return {
      list: [],
      h_list: [],
      index: 0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleClick(data) {
      console.log('click', data)
    },

    handleChange(data) {
      console.log('change', data)
    },

    getList() {
      setTimeout(() => {
        this.list = [
          '苹果',
          '天马流星拳',
          '香蕉',
          '大兄弟',
          'yes',
          '葡萄',
          '西红柿',
          '番茄',
          '守护雅典娜',
          '顶不住',
          '阿波罗',
          'kobe',
          'james',
          'java',
          'javaScript',
          'golang',
          'python'
        ]
        this.index = 1
        this.h_list = this.list.map(item => ({
          val: item,
          text: `- ${item} -`
        }))
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.v_w{
  width: 100px;
  height: 500px;
  border-right: 1px solid #eeeeee;
}
</style>