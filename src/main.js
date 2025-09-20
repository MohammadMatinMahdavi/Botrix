import { createApp } from 'vue'
import './assets/style.css'
import './assets/fonts.css'
import App from './App.vue'
import router from './router/router.js'
import 'swiper/swiper-bundle.min.css';
createApp(App).use(router).mount('#app')
