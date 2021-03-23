import root from '../pages/root.vue'
import about from '../pages/about.vue'

export default [
  {
    path: '/',
    component: root,
    name: 'root'
  },
  {
    path: '/about',
    component: about,
    name: 'about'
  }
]