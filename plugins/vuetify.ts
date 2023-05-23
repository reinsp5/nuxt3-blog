import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { MAIN_THEME, mainTheme, DARK_THEME, darkTheme } from "~/helpers/themes";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        darkTheme,
      },
      variations: {
        colors: ["primary", "secoundly", "accent"],
        lighten: 9,
        darken: 9,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
