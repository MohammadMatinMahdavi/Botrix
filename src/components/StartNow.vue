<template>
  <div id="start-now" class="mt-20 bg-white text-gray-800 flex flex-col md:flex-row items-center gap-10">
    <div class="w-full md:w-1/2 text-center md:text-right">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
        <span class="text-green-600">بات‌های پیشرفته</span>
        <br/>
           <span>برای</span> 
          <br/>
          <span >کانال‌های شما</span>
      </h1>
      <p class="mt-6 text-lg md:text-xl leading-relaxed text-gray-600">
        با ربات‌های ما، فعالیت رسانه‌ای خود را در پلتفرم‌های مختلف بهینه کنید و با کمترین هزینه، به موفقیت برسید.
      </p>
      <a href="#bots" class="inline-block mt-8 px-8 py-3 bg-green-600 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-700 transition-colors transform hover:scale-105">
        همین حالا شروع کنید!
      </a>
    </div>
    <div class="w-full md:w-1/2 relative mt-10 md:mt-0">
      <div class="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-3xl shadow-2xl">
        <img class="object-cover w-full h-full" :src="happyImage" alt="Happy user" />
      </div>
      <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-green-400 text-white px-6 py-3 rounded-full shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
        <p class="text-lg md:text-xl font-medium">سریع و آسان!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import happyImage from '../assets/images/happy.jpg';
</script>