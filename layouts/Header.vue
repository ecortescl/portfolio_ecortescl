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
                <a href="https://www.linkedin.com/in/ecortescl/" target="_blank"><i class="ri-linkedin-fill"></i></a>
              </li>
              <li>
                <a href="https://github.com/ecortescl" target="_blank"><i class="ri-github-line"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

export default {
  name: 'Header',
  data() {
    return {
      isSticky: false,
      isMenuOpen: false
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleResize() {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleSticky);
    window.addEventListener('resize', this.handleResize);
    
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap");
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleSticky);
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
