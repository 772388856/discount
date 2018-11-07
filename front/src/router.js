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
    }
  ]
})
