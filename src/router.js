import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TestPage from './views/test/testPage.vue'
import P000003 from './views/test/p000003.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TestPage
    },
    {
      path: '/p000003',
      name: 'p000003',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: P000003
    }
  ]
})
