<template>
  <page title="cell" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">默认</p>
        <vill-cell
          title="左边的文案"
          value="右边的文案"
          @click="handleClick"
          @rightClick="handleRightClick"
        />
      </div>
      <div class="items">
        <p class="item_title">左右icon</p>
        <vill-cell
          title="左边的文案"
          value="右边的文案"
          :leftIconOption="{
            url: 'social_github',
            size: '16',
            color: 'orange'
          }"
          :rightIconOption="{
            url: 'arrow_right',
            size: '16'
          }"
          @click="handleClick"
        />
        <vill-cell
          title="左边的文案"
          value="右边的文案"
          :horizontalPadding="0"
          :verticalPadding="7"
          :rightStyleOption="{
            color: 'orange'
          }"
          :leftStyleOption="{
            color: 'red'
          }"
          :leftIconOption="{
            url: require('@/assets/imgs/tabBar/ui.svg'),
            size: '16',
            color: 'orange'
          }"
          :rightIconOption="{
            url: require('@/assets/imgs/tabBar/ui.svg'),
            size: '16, 20'
          }"
        />
      </div>
      <div class="items">
        <p class="item_title">插槽</p>
        <vill-cell
          title="左边的文案"
          value="右边的文案"
          :required="true"
          :rightIconOption="{
            url: 'edit',
            size: '16'
          }"
        >
          <template #title="{data}">
            --{{data}}--
          </template>
          <template #rightCell>
            <vill-input
              v-model="inputValue"
              placeholder="请输入内容"
              :hasBorder="false"
              :height="24"
            />
          </template>
        </vill-cell>
        <p class="item_change">{{inputValue}}</p>
      </div>
      <div class="items">
        <p class="item_title">极限值测试</p>
        <vill-cell
          title="左边的文案左边的文案左边的文案左边的文案左边的文案"
          value="右边的文文案右边的文案右边的文案右边的文案右边的文案"
          :leftIconOption="{
            url: 'social_github',
            size: '16',
            color: 'orange'
          }"
          :rightIconOption="{
            url: 'arrow_right',
            size: '16'
          }"
        />
        <vill-cell
          ref="cell"
          title="左边的文案左边的文案左边的文案左边的文案左边的文案"
          :rightIconOption="{
            url: 'arrow_right',
            size: '16'
          }"
        />
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
      inputValue: '',
      a: false
    }
  },
  methods: {
    handleRightClick(event) {
      console.log('right click', event)
    },

    handleClick(event) {
      console.log('click', event)
    }
  }
}
</script>
