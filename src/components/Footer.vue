<template>
  <footer  class="mt-20  bg-gray-900 text-white py-12 px-4 md:px-10 lg:px-20">
    <div dir="rtl" class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- بخش معرفی -->
      <div class="flex flex-col  text-right">
        <p class="text-3xl font-bold text-green-500 mb-4">باتریکس</p>
        <p class="text-gray-400 leading-relaxed max-w-sm">
          راهکار هوشمندانه برای مدیریت آسان کانال‌های شما در پلتفرم‌های مختلف با استفاده از بات‌های قدرتمند.
        </p>
      </div>

      <!-- خدمات -->
      <div class="flex flex-col  text-right">
        <p class="text-xl font-bold mb-4">خدمات ما</p>
        <ul class="text-gray-400 space-y-2">
          <li>
            <a href="#" class="hover:text-green-300 transition-colors">ربات ارسال پست خودکار</a>
          </li>
          <li>
            <a href="#" class="hover:text-green-300 transition-colors">ربات ذخیره پست</a>
          </li>
          <li>
            <a href="#" class="hover:text-green-300 transition-colors">پاسخگوی خودکار</a>
          </li>
          <li>
            <a href="#" class="hover:text-green-300 transition-colors">مدیریت پیام‌ها</a>
          </li>
        </ul>
      </div>

      <!-- تماس با ما -->
      <div class="flex flex-col  text-right">
        <p class="text-xl font-bold mb-4">تماس با ما</p>
        <p class="text-gray-400">برای مشاوره و ثبت سفارش، از طریق تلگرام با ما در ارتباط باشید:</p>
        <a href="https://t.me/Almostsleepy" target="_blank" class="mt-4 px-6 py-2 flex items-center gap-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
          <span>ارتباط با پشتیبانی</span>
        </a>
      </div>
    </div>
    
    <div class="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
      <p>&copy; 2024 باتریکس. تمامی حقوق محفوظ است.</p>
    </div>
  </footer>
</template>

<script setup>
import telegramIcon from '../assets/images/telegram-icon.jpg';
</script>
