//front/nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/global.scss'],
  vite: {
    css:{
      preprocessorOptions: 
       {
        scss: {
          additionalData: ``
        }
      }
    }
  }
})

