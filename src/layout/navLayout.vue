<template>
  <div class="navLayout">
    <div class="navLayout_router">
      <router-view></router-view>
    </div>
    <vill-tab-bar
      fixed
      :options="options"
      :iconSize="24"
      :iconMarginBottom="4"
      color="#707070"
      activeColor="#25b270"
    />
  </div>
</template>
<script>
const LAYOUT_NAME = 'nav-layout'

export default {
  name: LAYOUT_NAME,
  data() {
    const options =[{
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
      badgeVisible: false,
      count: 0
    },{
      imgSrc: require('@/assets/imgs/tabBar/scroll.svg'),
      activeImgSrc: require('@/assets/imgs/tabBar/scroll_active.svg'),
      path: '/scrollPage',
      label: '滚动组件',
      badgeVisible: false,
      count: 0
    }]
    return {
      options: options
    }
  }
}
</script>
<style lang="scss" scoped>
.navLayout{
  height: 100vh;
  .navLayout_router{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 54px;
    background: #ffffff;
  }
}
</style>