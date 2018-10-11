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
      redirect: '/lists/nvzhuang',
      component: () => import('./views/home/')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./views/category/')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('./views/details/')
    },
    {
      path: '/lists/:id',
      name: 'lists',
      component: () => import('./views/lists/')
    }
  ]
})
