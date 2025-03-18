
<template>
  <section id="home" class="main-hero-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="glitch">
            <img src="/assets/images/about/me.jpg" alt="About Me" />
            <div class="glitch__layers">
              <div class="glitch__layer"></div>
              <div class="glitch__layer"></div>
              <div class="glitch__layer"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <!-- START HERO DESIGN AREA -->
          <div class="hero-content wow fadeInUp delay-0-2s">
            <h1>
              I am product designer, indie maker, and digital nomad living in
              internet.
            </h1>
            <h2>
              Hi, {{ "i'm" }} Stefeny {{ "i'm" }} a freelance product designer
              with 12+ years of experience focusing on app interfaces.
            </h2>
            <div class="hero-btns">
              <NuxtLink to="/contact" class="theme-btn"
                >Download CV
                <i class="ri-download-line"></i>
              </NuxtLink>
            </div>
          </div>
          <!-- / END HERO DESIGN AREA -->
        </div>
      </div>
    </div>
  </section>
</template>

