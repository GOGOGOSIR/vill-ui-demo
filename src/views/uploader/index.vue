<template>
  <page title="uploader" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">默认</p>
        <vill-uploader v-model="list1"  @delete="handleDelete"></vill-uploader>
      </div>
      <div class="items">
        <p class="item_title">禁用</p>
        <vill-uploader :disabled="true"></vill-uploader>
      </div>
      <div class="items">
        <p class="item_title">限制上传最多3张,开启多图上传</p>
        <vill-uploader :uploadStyle="{color: 'burlywood'}" v-model="list2" :multiple="true" :max-count="3" @overcount="handleOverCount"></vill-uploader>
      </div>
      <div class="items">
        <p class="item_title">上传校验</p>
        <vill-uploader v-model="list3" :before-read="beforeRead"></vill-uploader>
      </div>
      <div class="items">
        <p class="item_title">显示上传状态</p>
        <vill-uploader v-model="list4" :after-read="afterReadFailed"></vill-uploader>
      </div>
      <div class="items">
        <p class="item_title">如果默认的图片是异步加载的且很慢</p>
        <vill-uploader v-model="list5" :before-read="beforeReadAsync"></vill-uploader>
      </div>
      <div class="items">
        <p class="item_title">自定义上传组件(上传文件)</p>
        <vill-uploader accept="text/*" v-model="list6">
          <template #display="{data}">
            <div class="file_item" v-for="(item, index) in data" :key="index">
              {{ item.file.name }}
            </div>
          </template>
          <template #uploader>
            <vill-icon :name="url" size="20" />
          </template>
        </vill-uploader>
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
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      url: ''
    }
  },
  watch: {
    list1() {
      console.log('list1 change')
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      setTimeout(() => {
        this.list2 = [{
          url: require('@/assets/imgs/tabBar/ui.svg')
        }]
        this.url = require('@/assets/imgs/tabBar/ui.svg')
        console.log(this.url)
      }, 200)
    },
    back() {
      this.$router.go(-1)
    },
    handleDelete(data, index) {
      console.log('删除的图片信息',data, index)
    },
    handleOverCount(index) {
      console.log('当前上传的张数', index)
    },
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        this.$toast('请上传jpeg的图片格式')
        return false
      }

      return true
    },
    beforeReadAsync() {
      return new Promise(resolve => {
        setTimeout(() => {
          this.list5 = [{
            url: require('@/assets/imgs/slide/1_1.png')
          }]
          resolve()
        }, 5000)
      })
    },
    afterReadFailed(item) {
      console.log(item)
      item.status = 'uploading'
      item.message = 'loading'

      setTimeout(() => {
        item.status = 'info'
        item.message = '上传失败'
      }, 3000)
    }
  }
}
</script>
<style lang="scss" scoped>
.file_item{
  height: 80px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #969799;
  font-size: 14px;
  background: #f7f8fa;
  margin: 0 8px 8px 0;
}
</style>