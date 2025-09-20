<template>
  <div class="main-container bg-slate-900 w-full p-10 flex justify-center items-center rounded-lg mt-10">
    <div class="relative w-full h-[500px] flex items-center justify-center ">

      <button 
        @click="nextCard"
        class="absolute left-4 z-20 text-white p-2 rounded-full w-20 h-20 flex items-center justify-center bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 ease-in-out focus:outline-none"
      >
        <span class="text-xl font-bold">&gt;</span>
      </button>

      <div 
        v-for="(card, index) in cardsInfo"
        :key="card.id"
        :class="getCardPositionClass(index)"
        class="main_card p-2 text-white w-full max-w-80 rounded-xl flex flex-col h-96 border border-gray-700 shadow-xl absolute transition-all duration-700 ease-in-out"
      >
        <div class="card_pic w-full h-60">
          <img 
            class="rounded-xl h-full w-full object-cover transition-all duration-700 ease-in-out" 
            :class="{'filter grayscale blur-sm': getCardPositionClass(index).includes('scale-80')}"
            :src="card.cardImage" 
            alt="" 
          />
        </div>
        <div class="card_content flex-grow p-4">
          <p>{{ card.content }}</p>
        </div>
        <a :href="card.eitaaUrl" class="bg-orange-500 w-full h-10 flex justify-center items-center rounded-2xl mt-4">
          ایتا
        </a>
      </div>

      <button 
        @click="prevCard"
        class="absolute right-4 z-20 text-white p-2 rounded-full w-20 h-20 flex items-center justify-center bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 ease-in-out focus:outline-none"
      >
        <span class="text-xl font-bold">&lt;</span>
      </button>

    </div>
  </div>
</template>

<script>
import guide from "@/assets/images/guide_d.jpg";
import sarasari from "@/assets/images/sarasari_d.jpg";
import tehran from "@/assets/images/tehran_d.jpg";

export default {
  data() {
    return {
      currentIndex: 0,
      cardsInfo: [
        {
          cardImage: tehran,
          id: 1,
          content: "آگهی خود را با بیش از هزار بازدید کننده در استان تهران به اشتراک بگذارید!",
          eitaaUrl: "https://eitaa.com/joinchat/4256694823C7594a74332",
        },
        {
          cardImage: guide,
          id: 2,
          content: "دسترسی به لینک دیوار تمام استان ها و بررسی شرایط ثبت آگهی و ...",
          eitaaUrl: "https://eitaa.com/Divar_T_Mi",
        },
        {
          cardImage: sarasari,
          id: 3,
          content: "آگهی خود را با بیش از 120000 بازدید کننده از سراسر ایران به اشتراک بگذارید.",
          eitaaUrl: "https://eitaa.com/Divar_Mi",
        },
      ],
    };
  },
  methods: {
    nextCard() {
      this.currentIndex = (this.currentIndex + 1) % this.cardsInfo.length;
    },
    prevCard() {
      this.currentIndex = (this.currentIndex - 1 + this.cardsInfo.length) % this.cardsInfo.length;
    },
    getCardPositionClass(index) {
      const len = this.cardsInfo.length;
      let relativeIndex = index - this.currentIndex;

      if (relativeIndex < -1) relativeIndex += len;
      if (relativeIndex > 1) relativeIndex -= len;
      
      switch (relativeIndex) {
        case -1:
          return 'transform translate-x-[-120%] scale-80 z-0';
        case 0:
          return 'transform translate-x-0 scale-110 z-10';
        case 1:
          return 'transform translate-x-[120%] scale-80 z-0';
        default:
          return 'transform scale-0 translate-x-0 opacity-0 z-0';
      }
    }
  }
};
</script>