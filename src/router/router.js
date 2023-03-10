import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store.js'
import Main from '../components/main.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
    meta: {
      layout: 'main',
      auth: true
    },
    
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () => import('../components/leaderboard.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../components/auth.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import ('../components/register.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuthenticated']){
    next()
  }
  else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
