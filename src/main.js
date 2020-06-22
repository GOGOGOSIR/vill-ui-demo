import Vue from 'vue'
import 'amfe-flexible'
import App from './App.vue'
import router from  './router/index.js'
import './ui/index.js'
import './style/index.scss'

Vue.config.productionTip = false

function fixIosAutofocus () {
  let ua = '' + window.navigator.userAgent.toLowerCase()
  let isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua)
  if (isIos) {
    let myFunction
    document.body.addEventListener('focusin', () => {
      clearTimeout(myFunction)
    })
    document.body.addEventListener('focusout', () => {
      clearTimeout(myFunction)
      myFunction = setTimeout(function () {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      }, 200)
    })
  }
}

fixIosAutofocus()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
