import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    }
  ]
})

router.beforeEach(async (to) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (!isAuthenticated && to.name === 'dashboard') {
    return { name: 'home' }
  }

  if (isAuthenticated && to.name === 'home') {
    console.log("opaaa")
    return { name: 'dashboard' }
  }
})

export default router
