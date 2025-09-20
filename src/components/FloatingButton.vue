<template>
  <div class="fixed bottom-8 left-8 z-50">
    <button
      @click="togglePanel"
      class="relative w-16 h-16 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center
             transition-transform duration-300 transform hover:scale-110 focus:outline-none overflow-hidden animate-bounce-float"
    >
      <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 via-white/20 to-green-500 animate-pulse-light"></div>
      
      <svg
        class="w-8 h-8 relative z-10 transition-transform duration-300"
        :class="{ 'rotate-45': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
      </svg>
    </button>

    <transition name="slide-fade">
      <div v-if="isOpen" class="floating-panel absolute bottom-20 left-0 w-64 p-4 bg-white rounded-lg shadow-xl border border-gray-200">
        <h3 class="text-lg font-bold text-gray-800 mb-2">با ما در ارتباط باشید!</h3>
        <p class="text-sm text-gray-600 mb-4">
          برای ثبت سفارش و اطلاعات بیشتر، از طریق لینک‌های زیر اقدام کنید.
        </p>
        <a 
          href="https://t.me/Almostsleepy" 
          target="_blank"
          class="block w-full text-center py-2 px-4 mt-2 rounded-md bg-blue-500 text-white font-medium
                 hover:bg-blue-600 transition-colors"
        >
          تلگرام
        </a>
        <a 
          href="https://eitaa.com/justgod4ever" 
          target="_blank"
          class="block w-full text-center py-2 px-4 mt-2 rounded-md bg-orange-500 text-white font-medium
                 hover:bg-orange-600 transition-colors"
        >
          ایتا
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const togglePanel = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* انیمیشن نور داخلی */
@keyframes pulse-light {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-pulse-light {
  animation: pulse-light 5s infinite;
}

/* انیمیشن بیرونی برای حرکت دکمه */
@keyframes bounce-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-bounce-float {
  animation: bounce-float 2s infinite ease-in-out;
}
</style>