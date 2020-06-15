<template>
  <page title="tabBar" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">基础用法</p>
        <vill-tab-bar
          :options="options"
          :iconSize="24"
          :iconMarginBottom="4"
          @change="handlechange"
        />
      </div>
      <div class="items">
        <p class="item_title">自定义</p>
        <vill-tab-bar
          :options="options2"
          activeColor="red"
          color="#cccccc"
          :iconSize="30"
          :iconMarginBottom="4"
          :height="68"
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
      options: [],
      options2: []
    }
  },
  created() {
    this.options =[{
      imgSrc: require('@/assets/imgs/tabBar/ui.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/ui_active.svg'),
      path: '/',
      label: 'UI组件',
      badgeVisible: false,
      count: 0
    },{
      imgSrc: require('@/assets/imgs/tabBar/form.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/form_active.svg'),
      path: '/formPage',
      label: '表单组件',
      badgeVisible: false,
      count: 0
    },{
      imgSrc: require('@/assets/imgs/tabBar/operate.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/operate_active.svg'),
      path: '/operatePage',
      label: '交互组件',
      badgeVisible: true,
      count: 100,
      max: 99
    },{
      imgSrc: require('@/assets/imgs/tabBar/scroll.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/scroll_active.svg'),
      path: '/scrollPage',
      label: '滚动组件',
      badgeVisible: true,
      count: 9
    }]
       
    this.options2 =[{
      imgSrc: require('@/assets/imgs/tabBar/ui.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/ui_active.svg'),
      path: '/',
      label: 'UI组件',
      badgeVisible: false,
      count: 0
    },{
      imgSrc: require('@/assets/imgs/tabBar/form.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/form_active.svg'),
      path: '/formPage',
      label: '表单组件',
      badgeVisible: true,
      count: 1,
      color: 'red',
      backgroundColor: 'orange'
    },{
      imgSrc: require('@/assets/imgs/tabBar/operate.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/operate_active.svg'),
      path: '/operatePage',
      label: '交互组件',
      badgeVisible: true,
      count: 100
    },{
      imgSrc: require('@/assets/imgs/tabBar/scroll.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/scroll_active.svg'),
      path: '/scrollPage',
      label: '滚动组件',
      badgeVisible: true,
      count: 9
    }]
  },
  methods: {
    handlechange(index) {
      console.log(`下标为:${index}`)
    }
  }
}
</script>
