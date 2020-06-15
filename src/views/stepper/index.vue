<template>
  <page title="stepper" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础用法</p>
        <vill-stepper v-model="val" @focus="focus" @blur="blur" @minus="minus" @plus="plus" @change="handlechange" @overlimit="overlimit" @input="handleinput"/>
      </div>
      <div class="items">
        <p class="item_title">最大值为8，最小值为2</p>
        <vill-stepper v-model="limitvalue" min="2" max="8"/>
      </div>
      <div class="items">
        <p class="item_title">最大值为8，最小值为0, 步长为2</p>
        <vill-stepper v-model="stepvalue" step="2" min="0" max="8"/>
      </div>
      <div class="items">
        <p class="item_title">开启非整数模式</p>
        <vill-stepper v-model="floatvalue" :integer="false"/>
      </div>
      <div class="items">
        <p class="item_title">开启非整数模式，保留2位小数</p>
        <vill-stepper v-model="floatfiexdvalue" :decimalLength="2" :integer="false"/>
      </div>
      <div class="items">
        <p class="item_title">开启非整数模式, 步长为0.2，min为3，max为4</p>
        <vill-stepper v-model="floatstepvalue" :integer="false" step="0.2" min="3" max="4" />
      </div>
      <div class="items">
        <p class="item_title">禁用计步器</p>
        <vill-stepper :disabled="true" v-model="floatstepvalue" :integer="false" step="0.2" min="3" max="4" />
      </div>
      <div class="items">
        <p class="item_title">禁用计步器的输入框</p>
        <vill-stepper :disableInput="true" v-model="disableInputvalue" :integer="false" step="0.2" min="3" max="4" />
      </div>
      <div class="items">
        <p class="item_title">自定义尺寸</p>
        <vill-stepper buttonSize="40" inputSize="68" v-model="sizevalue" />
      </div>
      <div class="items">
        <p class="item_title">异步跟新数据</p>
        <vill-stepper :value="ayncvalue" :asyncChange="true" @change="change"/>
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
      val: 2,
      limitvalue: 3,
      stepvalue: 1,
      floatvalue: 1.1,
      floatfiexdvalue: 2.1,
      floatstepvalue: 3.1,
      disableInputvalue: 3,
      sizevalue: 100,
      ayncvalue: 10
    }
  },
  watch: {
    val(newval) {
      console.log('=== val change ===', newval)
    },
    limitvalue(newval) {
      console.log('=== limitvalue change ===', newval)
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    change(data) {
      const toast = this.$toast.loading({
        message: 'loading',
        duration: 0,
        verticalPosition: 'top'
      })
      setTimeout(() => {
        this.ayncvalue = data
        toast.clear()
      }, 1000)
    },
    focus(event) {
      console.log('focus', event)
    },
    blur() {
      console.log('blur')
    },
    minus(val) {
      console.log('minus', val)
    },
    plus(val) {
      console.log('plus', val)
    },
    handlechange(val) {
      console.log('handlechange', val)
    },
    handleinput(val) {
      console.log('handleinput', val)
    },
    overlimit() {
      console.log('overlimit')
    }
  }
}
</script>
