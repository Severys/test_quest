import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/v-main.vue'),

  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('../views/v-analytics.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
