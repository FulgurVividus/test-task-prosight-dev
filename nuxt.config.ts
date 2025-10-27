import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui"],
  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    colorMode: false,
  },
  app: {
    head: {
      title: "Test Task",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "Prosight DEV test task",
          content: "This is a test task of Prosight DEV",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      mode: process.env.NUXT_MODE,
    },
  },
});
