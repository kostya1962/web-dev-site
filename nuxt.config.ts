// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  routeRules: {
    "/about": { prerender: true },
    "/": { swr: true },
    "/catalog/**": { swr: 3600 },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    token: "",
    public: {
      apiurl: "",
      imageurl: "",
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
        },
      ],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/icon",
  ],
});
