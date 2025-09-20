<template>
  <div class="fixed bottom-8 left-8 z-50">
    <button
      @click="togglePanel"
      class="w-16 h-16 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center
             transition-transform duration-300 transform hover:scale-110 focus:outline-none"
      :class="{ 'rotate-45': isOpen }"
    >
      <svg
        class="w-8 h-8 transition-transform duration-300"
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
</style>