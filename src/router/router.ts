import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const MainView = () => import('@/views/MainView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'MainView',
    component: MainView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
