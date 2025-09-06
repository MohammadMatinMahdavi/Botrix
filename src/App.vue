<template>
  <div dir="rtl" class="">
   <Header/>
   <div class="mx-10">
   <StartNow/>
   <Slider/>
   <Bots/>
   <Services/>
   <Order/>
   </div>
   <Footer/>
   
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import StartNow from './components/StartNow.vue'
import Bots from './components/Bots.vue'
import Services from './components/Services.vue' // کامپوننت خدمات
import Order from './components/Order.vue' // کامپوننت ثبت سفارش
import Footer from './components/Footer.vue'
import Slider from './components/Slider.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>