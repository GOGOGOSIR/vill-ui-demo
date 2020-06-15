<template>
  <page title="empty" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">数据为空</p>
        <vill-empty image="noData" description="暂无数据" />
      </div>
      <div class="items">
        <p class="item_title">搜索为空</p>
        <vill-empty image="search" description="没有找到数据哦" />
      </div>
      <div class="items">
        <p class="item_title">定制图片的样式</p>
        <vill-empty :image="url" :imageStyle="imageStyle" description="没有找到数据哦" />
      </div>
      <div class="items">
        <p class="item_title">底部自定义</p>
        <vill-empty :image="url" :imageStyle="imageStyle" description="没有找到数据哦" >
          <template #bottom>
            <span class="text">我是自定义的内容</span>
          </template>
        </vill-empty>
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
      url: require('@/assets/imgs/tabBar/ui.svg'),
      imageStyle: {
        width: '200px',
        height: '100px',
        borderRadius: '5px'
      }
    }
  }
}
</script>
