import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3 Boilerplate',
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/nuxt.png',
      },
    ],
  },
  buildModules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  css: ['@/assets/scss/main.scss'],
});
