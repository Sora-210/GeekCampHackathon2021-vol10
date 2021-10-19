import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store/index'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Top',
    component: () => import('../views/Top.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {noAuth:true}
  },
  //Project Pages
  {
    path: '/project/:projectId/tasks',
    name: 'ProjectTasks',
    component: () => import('../views/project/Tasks.vue')
  },
  {
    path: '/project/:projectId/users',
    name: 'ProjectUsers',
    component: () => import('../views/project/Users.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.noAuth)) {
    if (!store.getters.User) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})


export default router
