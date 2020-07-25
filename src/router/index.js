import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Information from '../views/Information.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Info',
    name: 'Information',
    component: Information
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
