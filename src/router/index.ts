import { createRouter, createWebHistory } from 'vue-router'
import ExplorerView from '../views/ExplorerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ExplorerView
    },
    {
      path: '/debugging',
      name: 'debugging',
      component: () => import('../views/DebuggingView.vue')
    },
	{
		path: '/typing',
		name: 'typing',
		component: () => import('../views/TypingView.vue')
	  },
	  {
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	  },
  ]
})

export default router
