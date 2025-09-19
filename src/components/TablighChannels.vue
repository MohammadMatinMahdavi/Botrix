<template>
  <div class="main-container bg-slate-900 w-full p-10 flex justify-center items-center rounded-lg mt-10">
    <div class="relative w-full max-w-5xl h-[500px] flex items-center justify-center ">

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
        class="main_card p-2 text-white w-full max-w-sm rounded-xl flex flex-col h-96 border border-gray-700 shadow-xl absolute transition-all duration-700 ease-in-out"
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
import kanon from "@/assets/images/kanon.jpg";
import fanos from "@/assets/images/fanos.jpg";
import taam from "@/assets/images/taam.jpg";
import omid from "@/assets/images/omid.jpg";
import ai from "@/assets/images/ai.jpg";
import exire from "@/assets/images/exire.jpg";
import art from "@/assets/images/art.jpg";
import jahad from "@/assets/images/jahad.jpg";
import negar from "@/assets/images/negar.jpg";
export default {
  data() {
    return {
      currentIndex: 0,
      cardsInfo: [
        {
          cardImage: kanon,
          id: 1,
          content: "دسترسی به کانال ها و انتخاب نوع تبلیغ و اتصال به ادمین برای ثبت تبلیغ در زنجیره ی کانال ها",
          eitaaUrl: "https://eitaa.com/Mishkat_mi",
        },
        {
          cardImage: fanos,
          id: 2,
          content: "فانوس! رشد کسب و کار شما با مجموعه ای از دستورات به هدف نظم و تزریق انگیزه!",
          eitaaUrl: "https://eitaa.com/MyBusiness_Mi",
        },
        {
          cardImage: taam,
          id: 3,
          content: "طعام! یه کانال خوشمزه پر از ویدیو های آشپزی که هیچ جای دیگه پیداشون نمیکنی",
          eitaaUrl: "https://eitaa.com/Taam_Mi",
        },
        {
          cardImage: omid,
          id: 4,
          content: "امید! حس خوب زندگی رو اینجا تجربه کنید پر از محتوای بانشاط برای بهتر کردن حال شما",
          eitaaUrl: "https://eitaa.com/BeautyLife_Mi",
        },
        {
          cardImage: ai,
          id: 5,
          content: "مهمترین اخبار تکنولوژی و هوش مصنوعی از این اینجا دنبال کن.",
          eitaaUrl: "https://eitaa.com/AI_Academy_Mi",
        },
        {
          cardImage: exire,
          id: 6,
          content: "اکسیر! اصلا مگه ما میزاریم تو طول روز خدا از یادت بره؟ یه کانال معنوی پر از دعا و تدبر در قرآن و ....",
          eitaaUrl: "https://eitaa.com/AI_Academy_Mi",
        },
        {
          cardImage: art,
          id: 7,
          content: "آوینا! یه کانال پر از تصاویر خلاقانه در راستای انقلاب اسلامی. هنر خالص!",
          eitaaUrl: "https://eitaa.com/RevolutionArt_Mi",
        },
        {
          cardImage: jahad,
          id: 8,
          content: "برهان! جهاد تبیین یعنی تولید محتوای صحیح قبل از دشمن!",
          eitaaUrl: "https://eitaa.com/JihadTabein_Mi",
        },
        {
          cardImage: negar,
          id: 9,
          content: "نگار! یه کانال پر از احادیث زیبا که هر روز داخلش مطالب قرآنی هم قرار داده میشه .",
          eitaaUrl: "https://eitaa.com/Neghar_Mi",
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