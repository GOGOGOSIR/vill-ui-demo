import Vue from 'vue'
import VueRouter from 'vue-router'

import uiPage from '@/views/uiPage/index.vue'
import formPage from '@/views/formPage/index.vue'
import operatePage from '@/views/operatePage/index.vue'
import scrollPage from '@/views/scrollPage/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'uiPage',
    component: uiPage
  },
  {
    path: '/formPage',
    name: 'formPage',
    component: formPage
  },
  {
    path: '/operatePage',
    name: 'operatePage',
    component: operatePage
  },
  {
    path: '/scrollPage',
    name: 'scrollPage',
    component: scrollPage
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/button/index.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/icon/index.vue')
  },
  {
    path: '/navBar',
    name: 'navBar',
    component: () => import('@/views/navBar/index.vue')
  },
  {
    path: '/selectBar',
    name: 'selectBar',
    component: () => import('@/views/selectBar/index.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('@/views/loading/index.vue')
  },
  {
    path: '/stepper',
    name: 'stepper',
    component: () => import('@/views/stepper/index.vue')
  },
  {
    path: '/empty',
    name: 'empty',
    component: () => import('@/views/empty/index.vue')
  },
  {
    path: '/swipper',
    name: 'swipper',
    component: () => import('@/views/swipper/index.vue')
  },
  {
    path: '/tabBar',
    name: 'tabBar',
    component: () => import('@/views/tabBar/index.vue')
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import('@/views/badge/index.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import('@/views/tab/index.vue')
  },
  {
    path: '/cell',
    name: 'cell',
    component: () => import('@/views/cell/index.vue')
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: () => import('@/views/uploader/index.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('@/views/checkbox/index.vue')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('@/views/radio/index.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('@/views/switch/index.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('@/views/input/index.vue')
  },
  {
    path: '/textarea',
    name: 'textarea',
    component: () => import('@/views/textarea/index.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('@/views/toast/index.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('@/views/dialog/index.vue')
  },
  {
    path: '/image-preview',
    name: 'image-preview',
    component: () => import('@/views/image-preview/index.vue')
  },
  {
    path: '/action-sheet',
    name: 'action-sheet',
    component: () => import('@/views/action-sheet/index.vue')
  },
  {
    path: '/dropdown-menu',
    name: 'dropdown-menu',
    component: () => import('@/views/dropdown-menu/index.vue')
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import('@/views/scroll/index.vue')
  },
  {
    path: '/pulling',
    name: 'pulling',
    component: () => import('@/views/pulling/index.vue')
  },
  {
    path: '/scroll-nav-bar',
    name: 'scroll-nav-bar',
    component: () => import('@/views/scroll-nav-bar/index.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import('@/views/picker/index.vue')
  },
  {
    path: '/cascade-picker',
    name: 'cascade-picker',
    component: () => import('@/views/cascade-picker/index.vue')
  },
  {
    path: '/date-picker',
    name: 'date-picker',
    component: () => import('@/views/date-picker/index.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
