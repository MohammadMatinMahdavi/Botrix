<template>
    <Banner/>
    <Header/>
    <div class="mx-10">
    <TablighChannels/>
    <Divars/>
    </div>
    <Footer/>
</template>
<script setup>

import Header from '../components/Header.vue'
import TablighChannels from '../components/TablighChannels.vue'
import Divars from "../components/Divars.vue";
import Footer from '../components/Footer.vue'
import TablighChannelsVue from '../components/TablighChannels.vue';
import Banner from "../components/PromoBanner.vue";

</script>