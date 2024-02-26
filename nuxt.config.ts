//front/nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  vite: {
    css:{
      preprocessorOptions: 
       {
        scss: {
          additionalData: '',
        }
      }
    }
  }
})

