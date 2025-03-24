import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory('/2025Spring-pages/'),
  routes,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
