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
    devServer: {
        host: "0.0.0.0"
    },
  app: {
    head: {
      title: "Music. | rizal˙",
       link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
        {rel: 'icon', href: '/favicon.png'},
        {rel: 'stylesheet', type: 'text/css', href: 'https://use.typekit.net/eok3igd.css'}
      ],
       script: [
        {
          src: process.env.NODE_ENV === 'production' ? "https://ssstats.vercel.app/script.js" : '',
          defer: true,
          "data-website-id": "a6a51ef0-2aaa-4231-affa-f6da268f856d"
        }
      ]
    }
  }
})