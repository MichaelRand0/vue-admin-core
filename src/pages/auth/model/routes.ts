import type { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: 'login',
    name: 'login',
    component: () => import('@pages/auth/ui/LoginPage.vue'),
  },

  {
    path: 'registration',
    name: 'registration',
    component: () => import('@pages/auth/ui/RegistrationPage.vue'),
  },

  {
    path: '',
    redirect: { name: 'login' },
  },
]

export default authRoutes
