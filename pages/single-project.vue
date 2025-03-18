
<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import portfolio_data from "~/data/portfolio_data";
import { ref, computed } from "vue";
import ImagePopup from "~/components/common/ImagePopup.vue";
import "vue-easy-lightbox/external-css/vue-easy-lightbox.css";

useHead({
  title: "Proyecto - eCortes.cl",
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
});

import { useRoute } from 'nuxt/app'

const route = useRoute();
const currentProject = computed(() => {
  const projectId = parseInt(route.params.id);
  return portfolio_data.find(project => project.id === projectId) || portfolio_data[0];
});

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
          <SingleProjectBreadcrumb :project_data="currentProject" />
          <SingleProjectArea :handleImagePopup="handleImagePopup" :project_data="currentProject" />
          <HomeCtaArea /> 
          <Footer />
        </main>
      </div>
    </div>

    <ImagePopup
      ref="image_popup"
      :images="[currentProject.img]"
    />
  </div>
</template>
