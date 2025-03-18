

<script setup>

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
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});


const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value
}
 

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

</script>
<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo">Mi Portfolio</router-link>
      <div class="nav-links" :class="{ 'show': isMenuOpen }">
        <router-link to="/proyectos" @click="toggleMenu">Proyectos</router-link>
        <router-link to="/contacto" @click="toggleMenu">Contacto</router-link>
      </div>
      <button class="menu-button" @click="toggleMenu">
        <span class="material-icons">{{ isMenuOpen ? 'close' : 'menu' }}</span>
      </button>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const isMenuOpen = ref(false);
    const route = useRoute();
    
    const currentRoute = computed(() => route.path);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    const handleResize = () => {
      if (window.innerWidth > 768) {
        isMenuOpen.value = false;
      }
    };

    return {
      isMenuOpen,
      currentRoute,
      toggleMenu
    };
  }
};
</script>

<style scoped>
/* ... estilos existentes ... */
</style>

<template>
  <header :class="`main-header ${isSticky ? 'fixed-header' : ''}`">
    <div class="header-upper">
      <div class="container">
        <div class="header-inner d-flex align-items-center">
          <!-- START LOGO DESIGN AREA -->
          <div class="logo-outer">
            <div class="logo">
              <NuxtLink to="/"
                ><img
                  class="main-logo"
                  src="~/assets/images/logos/logo.png"
                  alt="Logo"
                  title="Logo"
              /></NuxtLink>
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
                    <img
                      src="~/assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </NuxtLink>
                </div>
                <!-- Toggle Button -->
                <button
                  type="button"
                  class="navbar-toggle"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="navigation clearfix">
                  <li><NuxtLink class="nav-link-click" to="/">Inicio</NuxtLink></li>
                  <li><NuxtLink class="nav-link-click" to="/acerca-de-mi">Acerca de mi</NuxtLink></li>
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
                <a href="https://www.facebook.com" target="_blank"><i class="ri-facebook-circle-fill"></i></a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank"><i class="ri-twitter-x-line"></i></a>
              </li>
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
