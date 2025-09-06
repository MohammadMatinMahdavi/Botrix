<template>
  <div class="relative w-full overflow-hidden rounded-3xl shadow-2xl mt-10">
    <div class="relative w-full h-96 flex">
      <div 
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index, 'absolute inset-0': true }"
        class="transition-opacity duration-1000 ease-in-out flex flex-col md:flex-row items-center justify-center p-10 md:p-16 text-white text-center md:text-right"
        :style="{ background: slide.color }"
      >
        <div class="flex-1 max-w-lg mb-8 md:mb-0 md:mr-10">
          <h2 class="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">{{ slide.title }}</h2>
          <p class="text-base md:text-xl leading-relaxed opacity-90">{{ slide.description }}</p>
        </div>
        <div class="flex-none w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          <svg class="w-full h-full text-white/50" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path :d="slide.iconPath"></path>
          </svg>
        </div>
      </div>
    </div>

    <button @click="prevSlide" class="absolute top-1/2 -translate-y-1/2 right-4 p-2 bg-white/30 rounded-full text-white shadow-lg backdrop-blur-sm hover:bg-white/50 transition-colors duration-300 z-10 hidden md:block">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
    <button @click="nextSlide" class="absolute top-1/2 -translate-y-1/2 left-4 p-2 bg-white/30 rounded-full text-white shadow-lg backdrop-blur-sm hover:bg-white/50 transition-colors duration-300 z-10 hidden md:block">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      <button 
        v-for="(slide, index) in slides" 
        :key="index" 
        @click="currentSlide = index"
        :class="{ 'w-6 bg-white': currentSlide === index, 'w-3 bg-white/50': currentSlide !== index }"
        class="h-3 rounded-full transition-all duration-300"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
let slideInterval = null;

const slides = [
  {
    title: 'صرفه‌جویی در زمان',
    description: 'زمان شما مهم‌ترین سرمایه است. با بات‌های ما، کارهای تکراری را خودکار کنید و روی اهداف بزرگ‌تر تمرکز کنید.',
    color: '#059669',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'مدیریت آسان و حرفه‌ای',
    description: 'کانال خود را به راحتی مدیریت کنید. از ارسال خودکار پست‌ها تا پاسخگویی به کاربران، همه چیز تحت کنترل شماست.',
    color: '#1e3a8a',
    iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  },
  {
    title: 'افزایش تعامل و بازدهی',
    description: 'با ربات‌های هوشمند ما، به راحتی نظرسنجی بسازید و آمار دقیق کاربران را رصد کنید. تعامل با مخاطبانتان هرگز به این سادگی نبوده است.',
    color: '#dc2626',
    iconPath: 'M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3 .895-3 2 1.343 2 3 2m-3-12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000); // هر ۵ ثانیه اسلاید عوض می‌شود
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
</script>