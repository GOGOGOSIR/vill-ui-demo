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
          title: 'toast'
        },{
          title: 'dialog'
        },{
          title: 'image-preview'
        },{
          title: 'action-sheet'
        },{
          title: 'dropdown-menu'
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