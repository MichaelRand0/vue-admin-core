import type { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: 'login',
    name: 'login',
    component: () => import('@pages/auth/ui/LoginForm.vue'),
  },

  {
    path: 'registration',
    name: 'registration',
    component: () => import('@pages/auth/ui/RegisterForm.vue'),
  },

  {
    path: '',
    redirect: { name: 'login' },
  },
]

export default authRoutes
