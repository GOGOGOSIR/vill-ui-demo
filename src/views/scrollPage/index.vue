<template>
  <div class="nav_wrapper">
    <vill-scroll :data="list" @click="handleClick">
      <vill-cell
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :rightIconOption="rightIconOption"
        @click="handleClick(item)"
      />
    </vill-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rightIconOption: {
        url: 'arrow_right'
      },
      list: [
        {
          title: 'scroll',
          name: 'scroll'
        },{
          title: '上拉加载更多和下拉刷新',
          name: 'pulling'
        },{
          title: 'scroll-nav-bar',
          name: 'scroll-nav-bar'
        }
      ]
    }
  },
  methods: {
    handleClick(data) {
      const { name } = data
      this.$router.push({
        name
      })
    }
  }
}
</script>