// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],
  googleFonts: {
    families: {
      Oswald: {
        wght: [300, 400, 500, 600, 700],
      },
      "Jacquard 12": {
        wght: [300, 400, 500, 600, 700],
      },
      "Azeret Mono": {
        wght: [300, 400, 500, 600, 700],
      },
      "Della Respira": {
        wght: [300, 400, 500, 600, 700],
      },
      Sacramento: {
        wght: [300, 400, 500, 600, 700],
      },
      "Abril Fatface": {
        wght: [300, 400, 500, 600, 700],
      },
      "Gideon Roman": {
        wght: [300, 400, 500, 600, 700],
      },
    },
  },
  devtools: { enabled: false },
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
});
