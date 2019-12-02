import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
  },
  {
    path: '/stage',
    component: () => import(/* webpackChunkName: "about" */ '../views/stage/index.vue'),
  },
  {
    path: '/stage/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/images/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes,
})

export default router
