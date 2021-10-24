import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store/index'
import {Auth, onAuthStateChanged, getAuth} from '@firebase/auth'

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
    meta: {
      notRequireAuth: true
    }
  },
  //Project Pages
  {
    path: '/project/all/tasks',
    name: 'ProjectTasks',
    component: () => import('../views/project/Tasks.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/project/:projectId/tasks',
    name: 'ProjectTasks',
    component: () => import('../views/project/Tasks.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/project/:projectId/users',
    name: 'ProjectUsers',
    component: () => import('../views/project/Users.vue'),
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//ログイン時入れないページのチェック
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.notRequireAuth)) {
    const auth:Auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user != null) {
        next({
          path: '/project/1/tasks'
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

//ログイン時でないと入れないページのチェック
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    const auth:Auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if(user == null) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

export default router
