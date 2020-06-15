<template>
  <page title="input" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础用法, 关闭清除按钮</p>
        <vill-input
          v-model="inputValue"
          placeholder="请输入内容"
          :clearable="false"
        />
        <p class="item_change">{{inputValue}}</p>
      </div>
      <div class="items">
        <p class="item_title">不要边框且最大输入20个字符</p>
        <vill-input
          v-model="inputValue2"
          placeholder="请输入内容"
          :hasBorder="false"
          :maxlength="20"
        />
        <p class="item_change">{{inputValue2}}</p>
      </div>
      <div class="items">
        <p class="item_title">禁用input</p>
        <vill-input
          v-model="inputValue3"
          placeholder="禁用了"
          :disabled="true"
        />
      </div>
      <div class="items">
        <p class="item_title">只读input</p>
        <vill-input
          v-model="inputValue4"
          placeholder="只读"
          :readonly="true"
        />
        <p class="item_change">{{inputValue4}}</p>
      </div>
      <div class="items">
        <p class="item_title">自动获取焦点，ios下无效</p>
        <vill-input
          v-model="inputValue5"
          placeholder="请输入"
          :autofocus="true"
        />
        <p class="item_change">{{inputValue5}}</p>
      </div>
      <div class="items">
        <p class="item_title">支持数字,只允许整数</p>
        <vill-input
          type="number"
          v-model="inputValue6"
          placeholder="只允许整数"
        />
        <p class="item_change">{{inputValue6}}</p>
      </div>
      <div class="items">
        <p class="item_title">支持数字,允许小数</p>
        <vill-input
          type="number"
          v-model="inputValue7"
          placeholder="允许小数"
          :integer="false"
        />
        <p class="item_change">{{inputValue7}}</p>
      </div>
      <div class="items">
        <p class="item_title">密码</p>
        <vill-input
          v-model="inputValue8"
          type="password"
          placeholder="请输入密码"
          :height="38"
        >
        </vill-input>
        <p class="item_change">{{inputValue8}}</p>
      </div>
      <div class="items">
        <p class="item_title">前后插槽</p>
        <vill-input
          v-model="inputValue9"
          placeholder="请输入"
        >
          <template #beforeInsert>
            <vill-icon name="search" />
          </template>
          <template #afterInsert>
            <span>元</span>
          </template>
        </vill-input>
        <p class="item_change">{{inputValue9}}</p>
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
      inputValue: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '啦啦啦',
      inputValue5: '',
      inputValue6: '',
      inputValue7: '',
      inputValue8: '',
      inputValue9: ''
    }
  }
}
</script>
