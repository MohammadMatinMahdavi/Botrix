<template>
  <div class="bg-red-600 text-white text-center py-2 px-4 relative overflow-hidden">
    <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 via-white/20 to-red-600 animate-pulse-light"></div>
    
    <div class="relative z-10 flex items-center justify-center gap-4 flex-wrap">
      <span class="text-sm md:text-base font-bold tracking-wide animate-fade-in">
         تخفیف ویژه! از این فرصت محدود استفاده کنید! 🎁
      </span>
      
      <div class="flex items-center gap-2">
        <span class="bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm font-mono tracking-wider animate-bounce-in">
           کد تخفیف 50 درصدی : zU4hIP
        </span>

        <span class="text-xs md:text-sm font-bold animate-fade-in-up">
          زمان باقی‌مانده:
        </span>
        <div class="bg-white/20 px-2 py-1 rounded-md text-xs md:text-sm font-mono tracking-wider">
          {{ formattedTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const targetDate = new Date('2025-12-31T23:59:59').getTime();
const now = ref(Date.now());
let timer;

const distance = computed(() => targetDate - now.value);

const days = computed(() => Math.floor(distance.value / (1000 * 60 * 60 * 24)));
const hours = computed(() => Math.floor((distance.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const minutes = computed(() => Math.floor((distance.value % (1000 * 60 * 60)) / (1000 * 60)));
const seconds = computed(() => Math.floor((distance.value % (1000 * 60)) / 1000));

const formattedTime = computed(() => {
  if (distance.value < 0) {
    return '00:00:00:00';
  }
  return `${days.value.toString().padStart(2, '0')}:${hours.value.toString().padStart(2, '0')}:${minutes.value.toString().padStart(2, '0')}:${seconds.value.toString().padStart(2, '0')}`;
});

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style scoped>
/* تعریف انیمیشن‌ها با Tailwind */
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

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeInUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-in-out;
}

@keyframes bounceIn {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-bounce-in {
  animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
</style>