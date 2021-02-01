import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SelectedMovie from '../views/SelectedMovie.vue'
import AddMovie from '../views/AddMovie.vue'
import EditMovie from '../views/EditMovie.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'SelectedMovie',
    component: SelectedMovie,
    props: true
  },
  {
    path: '/movie/add',
    name: 'AddMovie',
    component: AddMovie,
  },
  {
    path: '/movie/edit/:id',
    name: 'EditMovie',
    component: EditMovie,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
