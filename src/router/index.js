import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import Team from '@/containers/Team'
import Off from '@/containers/Off'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/Home',
      component: Home
    },
    {
      path: '/team',
      name: '/Team',
      component: Team
    },
    {
      path: '/off',
      name: '/Off',
      component: Off
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
