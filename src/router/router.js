// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import Channels from '../Views/Channels.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/channels', component: Channels },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // اگر مسیر شامل hash باشد (مثل #services)
    if (to.hash) {
      return {
        el: to.hash, // به المنت با id مربوط به hash اسکرول کن
        behavior: 'smooth', // اسکرول نرم
      }
    }
    // اگر موقعیت قبلی ذخیره شده باشد (مثل بازگشت به عقب)
    if (savedPosition) {
      return savedPosition
    }
    // اسکرول به بالای صفحه برای مسیرهای بدون hash
    return { top: 0 }
  },
})

export default router