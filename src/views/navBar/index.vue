<template>
  <page title="button" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础navbar</p>
        <vill-nav-bar title="基础navbar"></vill-nav-bar>
      </div>

      <div class="items">
        <p class="item_title">只显示title</p>
        <vill-nav-bar :leftVisible="false" :rightVisible="false" title="只显示title"></vill-nav-bar>
      </div>

      <div class="items">
        <p class="item_title">自定义navbar</p>
        <vill-nav-bar
          :height="54"
          :hasBorder="false"
          title="自定义navbar"
          leftIconSize="20"
          leftIconColor="red"
          :rightIconName="require('@/assets/imgs/tabBar/ui.svg')"
          rightIconSize="20,30"
        />
      </div>

      <div class="items">
        <p class="item_title">slot 扩展navbar</p>
        <vill-nav-bar title="slot 扩展navbar,如果有很长很长很长的标题，会怎么样呢">
          <template #left>取消</template>
          <template #middle="{title}">{{ title }}</template>
          <template #right>添加</template>
        </vill-nav-bar>
      </div>
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin]
}
</script>