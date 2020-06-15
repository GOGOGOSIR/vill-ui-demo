<template>
  <page title="loading" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">函数形式的用法</p>
        <vill-button @click="openPreview">函数形式的用法</vill-button>
      </div>
      <div class="items">
        <p class="item_title">组件形式的用法</p>
        <vill-button @click="visible=true">组件形式的用法</vill-button>
        <vill-image-preview v-model="visible" :images="imglist" />
        <p class="item_change">{{visible}}</p>
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
      imglist: [],
      visible: false
    }
  },
  created() {
    this.imglist = [
      require('@/assets/imgs/slide/1_1.png'),
      require('@/assets/imgs/slide/1_2.png'),
      require('@/assets/imgs/slide/1_3.png'),
      require('@/assets/imgs/slide/1_4.png')
    ]
  },
  methods: {
    openPreview() {
      this.$imagePreview({
        images: this.imglist,
        initialIndex: 1,
        indicatorPosition: 'bottom',
        maxZoom: 5,
        minZoom: 1 / 2,
        loop: false,
        closeable: true,
        onChange: (index) => {
          console.log(index)
        },
        onHide: (data) => {
          console.log('我关闭了', data)
        },
        onScale: (data) => {
          console.log('scale:', data)
        }
      })
    }
  }
}
</script>
