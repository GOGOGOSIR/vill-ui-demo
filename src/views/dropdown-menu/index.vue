<template>
  <page title="dropdownMenu" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">点击外部和点击遮罩层不关闭</p>
        <vill-dropdown-menu activeColor="orange" :overlayClosable="false" :outsideClosable="false">
          <vill-dropdown-menu-item v-model="value4" :options="option4"></vill-dropdown-menu-item>
          <vill-dropdown-menu-item disabled v-model="value5" :options="option2" valueKey="value" labelKey="text"></vill-dropdown-menu-item>
        </vill-dropdown-menu>
        <p class="item_change">{{value4}} - {{value5}}</p>
      </div>
      <div class="items">
        <p class="item_title">默认</p>
        <vill-dropdown-menu>
          <vill-dropdown-menu-item v-model="value6" :options="option1" valueKey="value" labelKey="text"></vill-dropdown-menu-item>
          <vill-dropdown-menu-item v-model="value7" :options="option2" valueKey="value" labelKey="text"></vill-dropdown-menu-item>
          <vill-dropdown-menu-item v-model="value8" :options="option3" valueKey="value" labelKey="text"></vill-dropdown-menu-item>
        </vill-dropdown-menu>
        <p class="item_change">{{value6}} - {{value7}} - {{value8}}</p>
      </div>
      <div class="items">
        <p class="item_title">自定义的内容</p>
        <vill-dropdown-menu>
          <vill-dropdown-menu-item v-model="value9" :options="option1" valueKey="value" labelKey="text"></vill-dropdown-menu-item>
          <vill-dropdown-menu-item title="自定义的内容">
            <span class="content">自定义的内容</span>
          </vill-dropdown-menu-item>
        </vill-dropdown-menu>
        <p class="item_change">{{value9}}</p>
      </div>
      <div class="items">
        <p class="item_title">向上展开</p>
        <vill-dropdown-menu direction='up'>
          <vill-dropdown-menu-item v-model="value1" :options="option1" valueKey="value" labelKey="text"></vill-dropdown-menu-item>
          <vill-dropdown-menu-item v-model="value2" :options="option4"></vill-dropdown-menu-item>
          <vill-dropdown-menu-item v-model="value3" :options="option3" valueKey="value" labelKey="text"></vill-dropdown-menu-item>
        </vill-dropdown-menu>
        <p class="item_change">{{value1}} - {{value2}} - {{value3}}</p>
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
      value1: 0,
      value2: 'c',
      value3: 'b',
      value4: 'a',
      value5: 'b',
      value6: 0,
      value7: 'b',
      value8: 'a',
      value9: 1,
      option1: [
        { text: '苹果', value: 0 },
        { text: '栗子', value: 1 },
        { text: '草莓', value: 2 },
      ],
      option2: [
        { text: '牛肉', value: 'a' },
        { text: '腌肉', value: 'b' },
        { text: '猪肉', value: 'c' },
      ],
      option3: [
        { text: '茶', value: 'a' },
        { text: '可乐', value: 'b' },
        { text: '美年达', value: 'c' },
      ],
      option4: [
        { label: '茶1', value: 'a' },
        { label: '可乐1', value: 'b' },
        { label: '美年达1', value: 'c' },
        { label: '茶1', value: 'd' },
        { label: '可乐1', value: 'e' },
        { label: '美年达1', value: 'f' },
        { label: '茶1', value: 'g' },
        { label: '可乐1', value: 'h' },
        { label: '美年达1', value: 'i' },
        { label: '茶1', value: 'j' },
        { label: '可乐1', value: 'k' },
        { label: '美年达1', value: 'l' },
        { label: '茶1', value: 'm' },
        { label: '可乐1', value: 'n' },
        { label: '美年达1', value: 'o' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v_w{
  width: 100px;
  height: 500px;
  border-right: 1px solid #eeeeee;
}
.content{
  height: 60px;
  line-height: 60px;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 15px;
}
</style>
