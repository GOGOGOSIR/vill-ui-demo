<template>
  <div id="app">
    <component :is="componentName"></component>
  </div>
</template>

<script>
import Layout from '@/layout/layout.vue'
import NavLayout from '@/layout/navLayout.vue'

export default {
  name: 'App',
  components: {
    Layout,
    NavLayout
  },
  computed: {
    componentName() {
      return this._getComponents()
    }
  },
  methods: {
    _getComponents() {
      const pagePath = ['/formPage', '/operatePage', '/scrollPage']
      const path = this.$route.path
      let isNav = true
      if (path === '/') {
        isNav = true
      } else {
        isNav = pagePath.some(item => {
          return this.$route.path.indexOf(item) > -1
        })
      }
      const Comp = isNav ? NavLayout : Layout
      return {
        render: (h) => {
          return h(Comp)
        }
      }
    }
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
