// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'eCortes.cl - Desarrollador de Software Entusiasta de UX/UI & Infraestructura',
      meta: [
        { name: 'description', content: 'Desarrollador de software especializado en UX/UI e infraestructura. Experto en Laravel, Vue.js, Nuxt.js y más tecnologías web modernas.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#00DC82' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ecortes.cl/' },
        { property: 'og:title', content: 'eCortes.cl - Desarrollador de Software' },
        { property: 'og:description', content: 'Desarrollador de software especializado en UX/UI e infraestructura. Experto en Laravel, Vue.js, Nuxt.js y más tecnologías web modernas.' },
         //{ property: 'og:image', content: 'https://ecortes.cl/og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://ecortes.cl/' },
        { name: 'twitter:title', content: 'eCortes.cl - Desarrollador de Software' },
        { name: 'twitter:description', content: 'Desarrollador de software especializado en UX/UI e infraestructura. Experto en Laravel, Vue.js, Nuxt.js y más tecnologías web modernas.' },
         //{ name: 'twitter:image', content: 'https://ecortes.cl/og-image.jpg' },
        // Keywords y autor
        { name: 'keywords', content: 'desarrollador web, software, UX/UI, Laravel, Vue.js, Nuxt.js, desarrollo web, programación, frontend, backend, full stack' },
        { name: 'author', content: 'Esteban Cortés' },
        // Robots y verificación
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://ecortes.cl' }
      ]
    }
  },

  css: [
    "@/assets/fonts/remixicon.css",
    "@/assets/css/animate.min.css",
    "@/assets/css/spacing.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/css/style.css",
    "@/assets/css/responsive.css",
  ],

  modules: [
    '@nuxtjs/robots'
  ],

  robots: {
    allow: '/',
    disallow: ['/api/**', '/_nuxt/**']
  },

  site: {
    url: 'https://ecortes.cl'
  },

  compatibilityDate: "2024-10-01",
})