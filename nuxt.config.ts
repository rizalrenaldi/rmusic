// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@vueuse/nuxt', '@nuxtjs/supabase'],
  supabase: {
    redirect: false
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: "Music. | rizal˙",
       link: [
       {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
        {rel: 'stylesheet', type: 'text/css', href: 'https://use.typekit.net/eok3igd.css'}
      ],
    }
  }
})