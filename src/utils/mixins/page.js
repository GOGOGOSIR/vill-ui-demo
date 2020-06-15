import Page from '@/components/page'

export default {
  components: {
    Page
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}