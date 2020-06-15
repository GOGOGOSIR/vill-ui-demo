<template>
  <page title="scroll" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">竖直滚动</p>
        <div class="v_wrapper">
          <vill-scroll :data="mocklist" @scroll="handleScroll" @scrollEnd="scrollEnd" @beforeScrollStart="handleBeforeScrollStart">
            <div class="v_item" v-for="(item, index) in mocklist" :key="index">
              {{ item }}
            </div>
          </vill-scroll>
        </div>
      </div>
      <div class="items">
        <p class="item_title">水平滚动</p>
        <div class="h_wrapper">
          <vill-scroll direction="horizontal" :data="mocklist">
            <div class="h_item" v-for="(item, index) in mocklist" :key="index">
              {{ item }}
            </div>
          </vill-scroll>
        </div>
      </div>
      <div class="items">
        <p class="item_title">混合滚动</p>
        <div class="mx_wrapper">
          <vill-scroll :data="mocklist">
            <!-- 横向滚动 -->
            <vill-scroll style="margin-bottom: 10px" direction="horizontal" :data="mocklist">
              <div class="mx_h_item" v-for="(item, index) in mocklist" :key="'h_' + index">
                {{ item }}
              </div>
            </vill-scroll>
            <div class="mx_item" v-for="(item, index) in mocklist.slice(0, 16)" :key="'v1_' + index">
              <div class="mx_text">{{ item }}</div>
            </div>
            <!-- 内嵌的纵向滚动 -->
            <div class="m_v_scroll">
              <vill-scroll :data="mocklist" nestMode="native">
                <div class="m_v_item" v-for="(item, index) in mocklist" :key="index" @click="handleClick(item, index)">
                  {{ item }}
                </div>
              </vill-scroll>
            </div>
            <div class="mx_item" v-for="(item, index) in mocklist.slice(16)" :key="'v2_' + index">
              <!-- 最外层的纵向滚动 -->
              <div class="mx_text">{{ item }}</div>
            </div>
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
      mocklist: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      setTimeout(() => {
        let arr = []
        for (let i=1; i <= 30; i++) {
          arr.push('选项' + i)
        }
        this.mocklist = arr
      }, 200)
    },

    handleClick(item, index) {
      console.log(item, index)
    },

    handleScroll(data) {
      console.log('scroll', data)
    },

    handleBeforeScrollStart() {
      console.log('BeforeScrollStart')
    },

    scrollEnd(data) {
      console.log('scrollEnd', data)
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

.h_wrapper{
  width: 100%;
  background: #ffffff;
  .h_item{
    display: inline-block;
    vertical-align: middle;
    border-radius: 3px;
    padding: 0 14px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #13bb86;
    color: #ffffff;
    font-size: 16px;
    margin-right: 10px;
    &:last-of-type{
      margin-right: 0;
    }
  }
}

.mx_wrapper{
  width: 100%;
  height: 500px;
  .mx_item{
    margin-bottom: 10px;
    &:last-of-type{
      margin-bottom: 0;
    }
    .mx_text{
       height: 60px;
      text-align: center;
      line-height: 60px;
      background: #13bb86;
      color: #ffffff;
      font-size: 16px;
    }
    
  }
}

.mx_h_item{
  display: inline-block;
  vertical-align: middle;
  border-radius: 3px;
  padding: 0 14px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: orange;
  color: #ffffff;
  font-size: 16px;
  margin-right: 10px;
  &:last-of-type{
    margin-right: 0;
  }
}
.m_v_scroll{
  width: 100%;
  height: 300px;
  background: #ffffff;
  margin-bottom: 10px;
  .m_v_item{
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: palevioletred;
    color: #ffffff;
    font-size: 16px;
    margin: 10px 0;
    &:last-of-type{
      margin-bottom: 0;
    }
  }
}
</style>