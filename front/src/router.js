import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./views/category/')
    },
    {
      path: '/lists/:id',
      name: 'lists',
      component: () => import('./views/lists/')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search/')
    },
    // 物料 start
    {
      path: '/good/:id',
      name: 'good',
      component: () => import('./views/material/')
    },
    {
      path: '/brand/:id',
      name: 'brand',
      component: () => import('./views/material/')
    },
    {
      path: '/baby/:id',
      name: 'baby',
      component: () => import('./views/material/')
    },
    {
      path: '/goods/:id',
      name: 'goods',
      component: () => import('./views/material/')
    },
    {
      path: '/trend/:id',
      name: 'trend',
      component: () => import('./views/material/')
    },
    {
      path: '/preferential/:id',
      name: 'preferential',
      component: () => import('./views/material/')
    }
    // 物料 end
  ]
})
