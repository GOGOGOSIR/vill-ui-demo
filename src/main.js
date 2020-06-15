import Vue from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from  './router/index.js'
import './ui/index.js'
import './style/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
