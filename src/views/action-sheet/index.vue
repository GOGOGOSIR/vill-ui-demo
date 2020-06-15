<template>
  <page title="action-sheet" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">基础用法</p>
        <vill-button @click="visible1=true">基础用法</vill-button>
        <vill-action-sheet
          v-model="visible1"
          :data="list"
          btnText="取消"
          @click-item="handleItem"
          @close="handleClose"
        />
      </div>
      <div class="items">
        <p class="item_title">自定义</p>
        <vill-button @click="visible2=true">自定义</vill-button>
        <vill-action-sheet
          v-model="visible2"
        >
          <div class="box1">
            <vill-scroll ref="scroll">
              <div class="items" v-for="(item, index) in 20" :key="index">{{index}}</div>
            </vill-scroll>
          </div>
        </vill-action-sheet>
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
      visible1: false,
      visible2: false,
      list: [1,2,3,4]
    }
  },
  watch: {
    visible2(v) {
      if (v) {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      }
    }
  },
  methods: {
    handleItem(data) {
      console.log('click-item', data)
    },

    handleClose() {
      console.log('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.box1{
  width: 100%;
  height: 400px;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  .items{
    border-bottom: 1px solid #eeeeee;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #333333;
  }
}
</style>