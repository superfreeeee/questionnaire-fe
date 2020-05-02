import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/login'
  },
  {
    path: '/customer/:paperId',
    name: 'customer',
    component: () => import('../views/customer/Customer')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/editor/Editor'),
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: () => import('../views/editor/overview/Overview')
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('../views/editor/create/Create')
      },
      {
        path: 'monitor/:paperId',
        name: 'monitor',
        component: () => import('../views/editor/monitor/Monitor')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
