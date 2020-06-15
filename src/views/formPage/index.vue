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
          title: 'picker'
        },{
          title: 'date-picker'
        },{
          title: 'cascade-picker'
        },{
          title: 'checkbox'
        },{
          title: 'radio'
        },{
          title: 'switch'
        },{
          title: 'input'
        },{
          title: 'textarea'
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