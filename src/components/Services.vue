<template>
  <div id="services" class="bg-white text-gray-800 rounded-xl p-6 md:p-10 shadow-lg mt-10">
    <div class="text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold mb-2">خدماتی که ما ارائه می‌دهیم</h2>
      <p class="text-lg md:text-xl text-gray-600">
        با استفاده از بات‌های قدرتمند ما، مدیریت کانال خود را آسان و خودکار کنید.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      <div v-for="service in services.slice(0, 3)" :key="service.title" class="service-card">
        <div class="card-content">
          <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
          </svg>
          <h3 class="font-bold text-lg md:text-xl">{{ service.title }}</h3>
          <p class="text-sm md:text-base text-gray-600">{{ service.description }}</p>
        </div>
        <a :href="service.link" class="order-button">
          اطلاعات بیشتر و ثبت سفارش
        </a>
      </div>

      <div v-for="service in services.slice(3, 6)" :key="service.title" class="service-card">
        <div class="card-content">
          <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
          </svg>
          <h3 class="font-bold text-lg md:text-xl">{{ service.title }}</h3>
          <p class="text-sm md:text-base text-gray-600">{{ service.description }}</p>
        </div>
        <a :href="service.link" class="order-button">
          اطلاعات بیشتر و ثبت سفارش
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'ارسال و ذخیره پست',
    description: 'این بات به شما امکان می‌دهد پست‌های یک کانال را ذخیره کرده و به صورت خودکار به کانال خودتان ارسال کنید. بدون نیاز به سر زدن روزانه به کانالتان، تمام محتوا را در اختیار بگیرید.',
    iconPath: 'M8 13v-2l4-4 4 4v2m-4 4v6m-6-6h12',
    link: 'https://t.me/Almostsleepy'
  },
  {
    title: 'ارسال خودکار فایل و تصویر',
    description: 'به راحتی و به صورت خودکار، فایل‌ها و تصاویر را از یک پوشه مشخص به کانال خود ارسال کنید. ایده‌آل برای به اشتراک‌گذاری محتوای بصری و فایل‌های دانلودی.',
    iconPath: 'M3 10h18M7 15h1m4 0h4m-9 5h1m4 0h4',
    link: 'https://t.me/Almostsleepy'
  },
  {
    title: 'پاسخگوی خودکار',
    description: 'این بات به دو صورت کار می‌کند: می‌توانید آن را به هوش مصنوعی وصل کنید یا مجموعه‌ای از پاسخ‌های آماده به آن بدهید. تصمیم با خودتان است!',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: 'https://t.me/Almostsleepy'
  },
  {
    title: 'مدیریت کاربران',
    description: 'به کمک این بات می‌توانید کاربران جدید را مدیریت کرده و به آن‌ها اجازه ورود به کانال‌های خصوصی را بدهید. همچنین می‌توانید کاربران غیرفعال را شناسایی و حذف کنید.',
    iconPath: 'M17 20h-4a4 4 0 01-4-4V7a4 4 0 014-4h4a4 4 0 014 4v9a4 4 0 01-4 4zm-1-8h-2m2 4h-2m-4 4v-4m0 0a2 2 0 10-4 0 2 2 0 004 0z',
    link: 'https://t.me/Almostsleepy'
  },
  {
    title: 'نظرسنجی و آمار',
    description: 'بات‌های ما به شما این امکان را می‌دهند که نظرسنجی‌های جذاب ایجاد کرده و آمارهای دقیقی از تعامل کاربران با محتوای خود به دست آورید.',
    iconPath: 'M8 13v-2l4-4 4 4v2m-4 4v6m-6-6h12',
    link: 'https://t.me/Almostsleepy'
  },
  {
    title: 'برنامه‌ریزی و زمانبندی پست‌ها',
    description: 'دیگر نگران زمان ارسال پست‌های خود نباشید. با این بات می‌توانید پست‌های خود را برای ساعت و تاریخ مشخصی برنامه‌ریزی کنید.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    link: 'https://t.me/Almostsleepy'
  },
];
</script>

<style scoped>
.service-card {
  @apply w-full h-auto bg-white text-gray-800 border border-gray-200 rounded-xl flex flex-col items-center gap-6 p-6 text-xl shadow-md hover:scale-105 transition-transform duration-300;
}
.card-content {
  @apply flex flex-col items-center gap-4 text-center;
}
.order-button {
  @apply mt-auto bg-green-500 hover:bg-green-600 text-white rounded-xl h-10 w-full text-sm md:text-xs flex items-center justify-center transition-colors duration-300;
}
</style>