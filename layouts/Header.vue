<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';

// menu sticky 
const isSticky = ref(false);
const handleSticky = () => {
  if (window.scrollY > 80) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleSticky);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
  window.removeEventListener('resize', handleResize);
});

const isMenuOpen = ref(false);
const route = useRoute();
const currentRoute = computed(() => route.path);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleResize = () => {
  if (window.innerWidth > 768) {
    isMenuOpen.value = false;
  }
};

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}
</script>

<template>
  <header :class="`main-header ${isSticky ? 'fixed-header' : ''}`">
    <div class="header-upper">
      <div class="container">
        <div class="header-inner d-flex align-items-center">
          <!-- START LOGO DESIGN AREA -->
          <div class="logo-outer">
            <div class="logo">
              <NuxtLink to="/"><img class="main-logo" src="~/assets/images/logos/logo.png" alt="Logo" title="Logo" />
              </NuxtLink>
            </div>
          </div>
          <!-- / END LOGO DESIGN AREA -->
          <!-- START NAV DESIGN AREA -->
          <div class="nav-outer clearfix mx-auto">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-lg">
              <div class="navbar-header">
                <div class="mobile-logo">
                  <NuxtLink to="/">
                    <img src="~/assets/images/logos/logo.png" alt="Logo" title="Logo" />
                  </NuxtLink>
                </div>
                <!-- Toggle Button -->
                <button type="button" class="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="navigation clearfix">
                  <li>
                    <NuxtLink class="nav-link-click" to="/">Inicio</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="nav-link-click" to="/acerca-de-mi">Acerca de mi</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="nav-link-click" to="/proyectos">Proyectos</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="nav-link-click" to="/contacto">Contacto</NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>
            <!-- / END NAV DESIGN AREA -->
          </div>
          <div class="about-social text-center">
            <ul>
              <li>
                <a href="https://www.linkedin.com" target="_blank"><i class="ri-linkedin-fill"></i></a>
              </li>
              <li>
                <a href="https://www.github.com" target="_blank"><i class="ri-github-line"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* ... estilos existentes ... */
</style>
