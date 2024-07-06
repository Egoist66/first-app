// https://nuxt.com/docs/api/configuration/nuxt-config

//https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      link: [
        {rel: 'stylesheet', href: ''}  
      ]
    }
  },
  css: [
    '~/assets/css/style.css'
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
    
  }
})
