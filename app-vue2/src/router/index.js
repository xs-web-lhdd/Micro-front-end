import Vue from 'vue'
import VueRouter from 'vue-router'

import Energy from '../pages/energy.vue'

const routes = [
  {
    path: '/energy', // 新能源页面
    name: 'Energy',
    component: Energy
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router