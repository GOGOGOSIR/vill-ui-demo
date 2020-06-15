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
          title: 'button'
        },{
          title: 'icon'
        },{
          title: 'navBar'
        },{
          title: 'selectBar'
        },{
          title: 'loading'
        },{
          title: 'stepper'
        },{
          title: 'empty'
        },{
          title: 'swipper'
        },{
          title: 'tabBar'
        },{
          title: 'badge'
        },{
          title: 'tab'
        },{
          title: 'cell'
        },{
          title: 'uploader'
        }
      ]
    }
  },
  methods: {
    handleClick(data) {
      const { title } = data
      this.$router.push({
        name: title
      })
    }
  }
}
</script>