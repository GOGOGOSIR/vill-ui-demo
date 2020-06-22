<template>
  <page ref="page" title="swiper" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础用法</p>
        <vill-swiper :initialIndex="numberActiveIndex" :loop="false" @change="handlechange">
          <vill-swiper-item v-for="(item, index) in list" :key="index" class="swiper_item_1">
            {{ item }}
          </vill-swiper-item>
        </vill-swiper>
      </div>
      <div class="items">
        <p class="item_title">异步图片</p>
        <vill-swiper :autoPlay="true" :loop="true">
          <vill-swiper-item v-for="(item, index) in imglist" :key="index" class="swiper_item_2" @click="handleClick">
            <img :src="item" @load="load"/>
          </vill-swiper-item>
        </vill-swiper>
      </div>
      <div class="items">
        <p class="item_title">竖直方向</p>
        <vill-swiper :vertical="true" :loop="true" style="height: 300px">
          <vill-swiper-item v-for="(item, index) in list" :key="index" class="swiper_item_1">
            {{ item }}
          </vill-swiper-item>
        </vill-swiper>
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
      list: [1,2,3],
      numberActiveIndex: 0,
      imglist: []
    }
  },
  created() {
    this.initList()
  },
  methods: {
    handlechange(index) {
      console.log(`下标为:${index}`)
    },
    initList() {
      setTimeout(() => {
        this.numberActiveIndex = 0
        this.imglist = [
          require('@/assets/imgs/slide/1_1.png'),
          require('@/assets/imgs/slide/1_2.png'),
          require('@/assets/imgs/slide/1_3.png'),
          require('@/assets/imgs/slide/1_4.png')
        ]
      }, 200)
    },
    handleClick(e) {
      console.log(e)
    },
    load() {
      this.$refs.page.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper_item_1{
  height: 300px;
  display: flex;
  background: orange;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 600;
  width: 100%;
  
}
.swiper_item_2{
  font-size: 20px;
  >img{
    width: 100%;
    height: auto;
  }
}
</style>