import Home from '../pages/Home.vue'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/repo',
    component: () => import('../pages/Repo.vue')
  }
]