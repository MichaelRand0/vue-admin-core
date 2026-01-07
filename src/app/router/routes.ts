import { AuthView } from '@pages/auth'
import authRoutes from '@pages/auth/model/routes'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'auth',
    component: AuthView,
    children: authRoutes,
  },
]

export default routes
