// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/leaflet', '@nuxt/ui', '@nuxtjs/seo'],

  site: {
    name: 'gunkmaps :)',
    description: 'community stories across the map of New Paltz',
  }
})