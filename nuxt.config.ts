// https://nuxt.com/docs/api/configuration/nuxt-config

//https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css

// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  experimental: {
    viewTransition: true
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        {rel: 'stylesheet', href: ''}  
      ]
    }
  },

  css: [
    '~/assets/css/style.css',
    '~/assets/css/tailwind.css'
  ],

  vue: {
    propsDestructure: true,
   
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  $development: {
    devtools: { enabled: true },
    
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  devtools: {
    timeline: {
      enabled: true
    }
  }
})