



<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";

useHead({
  title: "Projects Wize - Creative Personal Portfolio Nuxt js Template",
});

import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

 
onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});

onMounted(() => {
  $ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
    smooth: 2,
    effects: true   
  })
 
})

import portfolio_data from "~/data/portfolio_data";
import { ref } from "vue";
import ImagePopup from "~/components/common/ImagePopup.vue";
import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";

const image_popup = ref(null);

function handleImagePopup(index) {
  image_popup.value.showImg(index); 
}
  

</script>


<template>
  <div>
    <CommonScrollTop />
    <Header />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="main-bg o-hidden">
          <ProjectsBreadcrumb :portfolio_data="portfolio_data" />
          
          <HomePortfolioArea :handleImagePopup="handleImagePopup" :portfolio_data="portfolio_data"  /> 
          <HomeCtaArea />
          <Footer />
        </main>
      </div>
    </div>
    <ImagePopup
      ref="image_popup"
      :images="portfolio_data.map((item) => item.img)"
    />

  </div>
</template>

