<template>
  <page title="上拉加载更多和下拉刷新" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">基础</p>
        <div class="v_wrapper">
          <vill-scroll :options="{pullUpLoad: true, pullDownRefresh: true}" :data="list" :hasPullUpMore="hasPullUpMore" @pullingDown="handlePullingDown(1)" @pullingUp="handlePullingUp(1)">
            <div class="v_item" v-for="(item, index) in list" :key="index">
              选项-{{item}}
            </div>
          </vill-scroll>
        </div>
      </div>
      <div class="items">
        <p class="item_title">自定义上拉加载和下拉刷新</p>
        <div class="v_wrapper">
          <vill-scroll :options="{pullUpLoad: true, pullDownRefresh: true}" :data="list2" :hasPullUpMore="hasPullUpMore2" @pullingDown="handlePullingDown(2)" @pullingUp="handlePullingUp(2)">
            <template #pulldown="{beforePullDown, isPullDownUpdating, isPullingDown, isPullDownThreshold}">
              <div class="pullup" v-show="beforePullDown && !isPullDownUpdating">
                <span>{{ isPullDownThreshold ? '松开我' : '继续下拉' }}</span>
              </div>
              <div v-show="!beforePullDown || isPullDownUpdating">
                <div class="pullup" v-show="isPullingDown">
                  刷新中...
                </div>
                <div v-show="!isPullingDown" class="pullup"><span>刷新成功</span></div>
              </div>
            </template>
            <div class="v_item" v-for="(item, index) in list2" :key="index">
              选项-{{item}}
            </div>
            <template #pullup>
              <div class="pullup">{{ hasPullUpMore2 ? '自定义下拉刷新的文案' : '没数据了' }}</div>
            </template>
          </vill-scroll>
        </div>
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
      list: [],
      list2: [],
      hasPullUpMore: true,
      hasPullUpMore2: true,
      is_pulling: false
    }
  },
  created() {
    this._initData()
  },
  methods: {
    _initData() {
      setTimeout(() => {
        let list = []
        for (let i = 1; i <= 10; i++) {
          list.push(i)
        }
        this.list = list
        this.list2 = list
        this.hasPullUpMore = this.list.length > 3
        this.hasPullUpMore2 = this.list.length > 3
      }, 200)
    },

    handlePullingUp(index) {
      console.log('load more')
      setTimeout(() => {
        let attr_list = index === 1 ? 'list' : 'list2'
        let attr_more = index === 1 ? 'hasPullUpMore' : 'hasPullUpMore2'
        let list = []
        for (let i = this[attr_list][this[attr_list].length-1] + 1; i <= this[attr_list][this[attr_list].length-1] + 10; i++) {
          list.push(i)
        }
        this[attr_list] = [
          ...this[attr_list],
          ...list
        ]
        this[attr_more] = !(this[attr_list].length >= 30)
      }, 2000)
    },

    handlePullingDown(index) {
      console.log('下拉刷新')
      setTimeout(() => {
        let attr_list = index === 1 ? 'list' : 'list2'
        let attr_more = index === 1 ? 'hasPullUpMore' : 'hasPullUpMore2'
        let list = []
        for (let i = 1; i <= 10; i++) {
          list.push(i)
        }
        this[attr_list] = list
        this[attr_more] = true
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.v_wrapper{
  width: 100%;
  height: 500px;
  .v_item{
    height: 60px;
    text-align: center;
    line-height: 60px;
    background: #13bb86;
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 10px;
    &:last-of-type{
      margin-bottom: 0;
    } 
  }
}
.pullup{
  font-size: 14px;
  color: #13bb86;
  text-align: center;
  padding: 10px 0;
}
</style>