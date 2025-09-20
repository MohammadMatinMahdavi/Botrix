<template>
  <header class="sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl bg-white/70 px-2 md:px-5">
    <div class="container mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
      <div class="flex items-center gap-2 md:gap-4">
        <p class="text-2xl md:text-3xl font-extrabold text-green-700 tracking-wider transition-colors duration-300 hover:text-green-900">
          باتریکس
        </p>
      </div>

      <nav class="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <router-link to="/#start-now" class="relative group hover:text-green-500 transition-all duration-300">
          خانه
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
        <router-link to="/#bots" class="relative group hover:text-green-500 transition-all duration-300">
          پلتفرم ها
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
        <router-link to="/#services" class="relative group hover:text-green-500 transition-all duration-300">
          خدمات
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
        <router-link to="/channels" class="relative group hover:text-green-500 transition-all duration-300">
            نمونه ها 
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </nav>

      <a class="hidden md:block" href="https://t.me/Almostsleepy" target="_blank">
        <div class="px-5 py-2 flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
          <p class="font-bold">ارتباط با ما</p>
        </div>
      </a>

      <button @click="toggleMenu" class="md:hidden text-gray-800 focus:outline-none">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    <div v-if="isMenuOpen" class="md:hidden mt-4 transition-all duration-300 ease-in-out">
      <nav class="flex flex-col gap-4 text-gray-600 font-medium text-center bg-gray-50 rounded-lg p-4 shadow-inner">
        <router-link @click="closeMenu" to="/#start-now" class="py-2 hover:bg-gray-200 rounded-md transition-colors">خانه</router-link>
        <router-link @click="closeMenu" to="/#bots" class="py-2 hover:bg-gray-200 rounded-md transition-colors">ربات ها</router-link>
        <router-link @click="closeMenu" to="/#services" class="py-2 hover:bg-gray-200 rounded-md transition-colors">خدمات</router-link>
        <router-link to="/channels">نمونه ها</router-link>
        <a @click="closeMenu" href="https://t.me/Almostsleepy" class="py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">ارتباط با ما</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>