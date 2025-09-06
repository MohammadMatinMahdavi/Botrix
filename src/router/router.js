// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import StartNow from '../components/StartNow.vue'
import Bots from '../components/Bots.vue'
const routes = [
  { path: '/', component: StartNow },
  { path: '/bots', component: Bots },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router