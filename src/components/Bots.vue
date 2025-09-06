<template>
  <div class="mt-20 bg-gray-50 text-gray-800 rounded-xl p-6 md:p-10 shadow-lg" id="bots">
    <div class="text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold mb-2">پلتفرم‌های تحت پوشش ما</h2>
      <p class="text-lg md:text-xl text-gray-600">
        باتریکس با ارائه بات‌های پیشرفته، به شما کمک می‌کند تا کانال‌های خود را در این پلتفرم‌ها به صورت خودکار مدیریت کنید.
      </p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
      <div
        v-for="platform in platforms"
        :key="platform.name"
        class="bg-white p-4 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
      >
        <div class="flex flex-col items-center">
          <img :src="platform.src" :alt="platform.name" class="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto" />
          <p class="mt-2 text-center text-lg font-medium">{{ platform.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import rubikaIcon from '../assets/images/rubika-icon.jpg';
import eitaaIcon from '../assets/images/eitaa-icon.jpg';
import baleIcon from '../assets/images/bale-icon.jpg';
import telegramIcon from '../assets/images/telegram-icon.jpg';
import whatsupIcon from '../assets/images/whatsup-icon.jpg';

const platforms = [
  { name: 'روبیکا', src: rubikaIcon },
  { name: 'ایتا', src: eitaaIcon },
  { name: 'بله', src: baleIcon },
  { name: 'تلگرام', src: telegramIcon },
  { name: 'واتساپ', src: whatsupIcon },
];
</script>