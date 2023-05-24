<script lang="ts" setup>
import type { Article } from "~/types/article";

const { data } = await useAsyncData("articles", async () => {
  const { $newtClient } = useNuxtApp();
  return await $newtClient.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body"],
    },
  });
});
const articles = data.value?.items;

useHead({
  title: "Newt・Nuxtブログ",
  meta: [{ name: "description", content: "NewtとNuxtを利用したブログです" }],
});
</script>

<template>
  <v-row class="ma-2 pa-2">
    <v-col v-for="article in articles" :key="article._id">
      <v-card height="100%">
        <v-card-text>
          <h2 class="text-h6">
            <NuxtLink :to="`/blog/${article.slug}`">
              {{ article.title }}
            </NuxtLink>
          </h2>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped></style>
