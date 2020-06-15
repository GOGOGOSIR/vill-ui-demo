<template>
  <page title="toast" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">基本用法</p>
        <vill-button @click="openToast">打开toast</vill-button>
      </div>
      <div class="items">
        <p class="item_title">loading-toast（默认1.5s自动关闭）</p>
        <vill-button @click="openLoadingToast">loading-toast（默认1.5s自动关闭）</vill-button>
      </div>
      <div class="items">
        <p class="item_title">loading-toast（手动关闭）</p>
        <vill-button @click="handleLoadingToast">loading-toast（手动关闭）</vill-button>
      </div>
      <div class="items">
        <p class="item_title">success-toast</p>
        <vill-button @click="openStatusToast('success')">success-toast</vill-button>
      </div>
      <div class="items">
        <p class="item_title">fail-toast</p>
        <vill-button @click="openStatusToast('fail')">fail-toast</vill-button>
      </div>
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin],
  methods: {
    openToast() {
      this.$toast({
        message: '这是toast的内容',
        duration: 3000,
        mask: false,
        onShow: () => {
          console.log('我打开了toast')
        },
        onHide: () => {
          console.log('我关闭了toast')
        }
      })
    },

    openLoadingToast() {
      this.$toast.loading('loading-toast（默认1.5s自动关闭）')
    },

    handleLoadingToast() {
      const toast = this.$toast.loading({
        message: 'loading-toast（手动关闭）',
        duration: 0,
        verticalPosition: 'top'
      })
      setTimeout(() => {
        toast.clear()
      }, 1000)
    },

    openStatusToast(type) {
      this.$toast[type](type + '-toast')
    }
  }
}
</script>
