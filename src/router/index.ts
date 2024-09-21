import { createRouter, createWebHistory } from 'vue-router'
import GroupView from '../views/GroupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GroupView
    },
  ]
})

export default router
