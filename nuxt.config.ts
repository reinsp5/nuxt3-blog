import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
    },
  },
  runtimeConfig: {
    newt: {
      spaceUid: "",
      cdnApiToken: "",
    },
  },
});
