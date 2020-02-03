import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Api from '../views/Api.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/api',
    name: 'api',
    component: Api
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router


