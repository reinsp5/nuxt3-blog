<script lang="ts" setup>
import { mdiHome, mdiTwitter, mdiGithub } from "@mdi/js";
const drawer = ref(false);
const icons = [mdiTwitter, mdiGithub];
</script>

<template>
  <v-app>
    <v-app-bar :elevation="0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-app-bar-title>実演用仮ブログ</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-item :prepend-icon="mdiHome" title="ホーム" to="/" nuxt />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-main>
  </v-app>
</template>
