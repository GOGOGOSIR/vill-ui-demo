<template>
  <page title="dialog" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">组件方式的基本用法</p>
        <vill-button @click="visible=true">组件方式的基本用法</vill-button>
        <vill-dialog
          v-model="visible"
          title="dialog的标题"
          message="dialog的内容"
          confirmBtnText="确定"
          @cancel="handleCancel"
          @close="handleClose"
        />
        <p class="item_change">{{visible}}</p>
      </div>
      <div class="items">
        <p class="item_title">组件方式的自定义</p>
        <vill-button @click="visible2=true">组件方式的自定义</vill-button>
        <vill-dialog
          v-model="visible2"
          type="confirm"
          message="dialog的内容"
          confirmBtnText="确定"
          confirmBtnColor="red"
          :confirmBtnFontSize="16"
          cancelBtnText="取消"
          cancelBtnColor="#333333"
          :cancelBtnFontSize="16"
          :beforeConfirm="beforeConfirm"
          :callback="callback"
          :zIndex="2000"
        />
        <p class="item_change">{{visible2}}</p>
      </div>
      <div class="items">
        <p class="item_title">组件方式的插槽用法</p>
        <vill-button @click="visible3=true">组件方式的插槽用法</vill-button>
        <vill-dialog
          v-model="visible3"
          confirmBtnText="确定"
        >
          <template #title>
            <div class="title">
              - dialog的标题 -
            </div>
          </template>
          <template #message>
            <div class="message">
              <vill-icon name="calculator" />
              <span>我是内容</span>
            </div>
          </template>
        </vill-dialog>
        <p class="item_change">{{visible3}}</p>
      </div>
      <div class="items">
        <p class="item_title">函数方式的调用alert</p>
        <vill-button @click="openalert">函数方式的调用alert</vill-button>
      </div>
      <div class="items">
        <p class="item_title">函数方式的调用confirm(阻止确认按钮回调)</p>
        <vill-button @click="openconfirm">函数方式的调用confirm(阻止确认按钮回调)</vill-button>
      </div>
      <div class="items">
        <p class="item_title">函数方式的调用confirm(beforeConfirm异常)</p>
        <vill-button @click="openconfirmErr">函数方式的调用confirm(beforeConfirm异常)</vill-button>
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
      visible: false,
      visible2: false,
      visible3: false
    }
  },
  methods: {
    handleClose() {
      console.log('alert close')
    },

    handleCancel() {
      console.log('alert cancel')
    },

    beforeConfirm() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 2500)
      })
    },

    callback() {
      console.log('我是点击操作后的回调函数')
    },

    openalert() {
      this.$dialog.alert({
        message: '这是内容',
        title: '标题',
        confirmBtnText: "确定",
      }).catch((action) => {
        console.log('alert关闭了', action)
      })
    },

    openconfirm() {
      this.$dialog.confirm({
        message: '这是内容',
        title: '标题',
        beforeConfirm: () => {
          return false
        },
        confirmBtnText: "确定",
        cancelBtnText: "取消"
      }).then((action) => {
        console.log('确认后的回调', action)
      }).catch((action) => {
        console.log('confirm关闭了', action)
      })
    },

    openconfirmErr() {
      this.$dialog.confirm({
        message: '这是内容',
        title: '标题',
        beforeConfirm: this.errPromise,
        confirmBtnText: "确定",
        cancelBtnText: "取消",
        beforeConfirmError: this.dealErr
      }).then((action) => {
        console.log('确认后的回调', action)
      }).catch((action) => {
        console.log('confirm关闭了', action)
      })
    },

    errPromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('我出了异常')
        }, 2500)
      })
    },

    dealErr(err) {
      console.log(err)
    }
  }
}
</script>
<style lang="scss" scoped>
.title{
  padding: 10px 15px;
  box-sizing: border-box;
  color: red;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
.message{
  background: palevioletred;
  color: white;
  font-size: 14px;
  padding:10px 20px;
  text-align: center;
  >span{
    margin-left: 5px;
  }
}
</style>