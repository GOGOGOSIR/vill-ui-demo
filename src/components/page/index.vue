<template>
  <div class="vill-page">
    <slot name="wrapper">
      <header class="vill-page-header" ref="pageHeader">
        <slot name="header">
          <vill-nav-bar :title="title" :rightDisabled="true" @left-click="handleNavLeftClick" />
        </slot>
      </header>
      <main class="vill-page-main" :style="mainStyle">
        <slot name="content">
          <vill-scroll ref="eScroll">
            <slot name="main" :scroll="scrollRef"></slot>
          </vill-scroll>
        </slot>
      </main>
      <div ref="lastInset">
        <slot name="lastInset"></slot>
      </div>
    </slot>
  </div>
</template>

<script>
const COMPONENT_NAME = 'vill-page'

const HANDLE_NAV_LEFT_CLICK = 'handleNavLeftClick'

export default {
  name: COMPONENT_NAME,
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      mainStyle: {},
      scrollRef: null
    }
  },
  mounted() {
    this.calculationHeight()
  },
  methods: {
    handleNavLeftClick() {
      this.$emit(HANDLE_NAV_LEFT_CLICK)
    },
    calculationHeight() {
      this.$nextTick(() => {
        let lastInsetHeight = this.$refs.lastInset.clientHeight || 0
        let headerHeight = this.$refs.pageHeader.clientHeight || 0
        this.mainStyle = {
          height: `calc(100% - ${lastInsetHeight + headerHeight}px)`
        }
        this.scrollRef = this.$refs.eScroll
      })
    },
    refresh() {
      this.$nextTick(() => {
        this.$refs.eScroll.refresh()
      })
    }
  }
}
</script>

<style lang="scss">
.vill-page{
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  .vill-page-main{
    width: 100%;
    height: calc(100% - 44px);
    overflow: auto;
  }
}
</style>