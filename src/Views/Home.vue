<template>
<div dir="rtl" class="">
   <Banner/>
   <Header/>
   <div class="mx-10">
   <StartNow id="start-now"/>
   <Bots id="bots"/>
   <Slider/>
   <Services id="services"/>
   <Order/>
   <Float/>
   </div>
   <Footer/>
</div>
</template>
<script setup>
import Header from '../components/Header.vue'
import StartNow from '../components/StartNow.vue'
import Bots from '../components/Bots.vue'
import Services from '../components/Services.vue' // کامپوننت خدمات
import Order from '../components/Order.vue' // کامپوننت ثبت سفارش
import Footer from '../components/Footer.vue'
import Slider from '../components/Slider.vue'
import Float from "../components/FloatingButton.vue";
import Banner from "../components/PromoBanner.vue";
</script>