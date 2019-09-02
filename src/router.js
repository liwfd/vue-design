import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TestPage from './views/test/testPage.vue'
import Page from './views/test/page'
import Hook from './views/test/hook'
import PreT from './views/test/preT'
import Table from './views/test/md/table.md'
import ArrayTest from './views/test/array'
import Hoc from './views/test/hoc'

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
            path: '/array',
            name: 'array',
            component: ArrayTest
        },
        {
            path: '/preT',
            name: 'preT',
            component: PreT
        },
        {
            path: '/table',
            name: 'table',
            component: Table
        },
        {
            path: '/hook',
            name: 'hook',
            component: Hook
        },
        {
            path: '/hoc',
            name: 'hoc',
            component: Hoc
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
            path: '/page',
            name: 'page',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Page
        }
    ]
})
