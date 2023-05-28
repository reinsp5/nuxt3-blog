<script lang="ts" setup>
import type { Article } from "~/types/article";
import type { Category } from "~/types/category";

// 記事の取得
const { data: articleData } = await useAsyncData("articles", async () => {
  const { $newtClient } = useNuxtApp();
  return await $newtClient.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: [
        "_id",
        "_sys",
        "title",
        "slug",
        "body",
        "description",
        "coverImage",
        "categories",
      ],
    },
  });
});
const articles = articleData.value?.items;

const { data: categoryData } = await useAsyncData("categories", async () => {
  const { $newtClient } = useNuxtApp();
  return await $newtClient.getContents<Category>({
    appUid: "blog",
    modelUid: "category",
    query: {
      select: ["_id", "name", "slug"],
    },
  });
});
const categories = categoryData.value?.items;

useHead({
  title: "Newt・Nuxtブログ",
  meta: [{ name: "description", content: "NewtとNuxtを利用したブログです" }],
});
</script>

<template>
  <v-row class="ma-2 pa-2">
    <!-- ブログ記事 -->
    <v-col cols="12" md="8">
      <ArticleCard
        v-for="article in articles"
        :key="article._id"
        :article="article"
      />
    </v-col>
    <!-- サイドメニュー -->
    <v-col cols="12" md="4">
      <v-card>
        <v-card-title>カテゴリー</v-card-title>
        <v-card-text>
          <v-chip-group>
            <v-chip
              v-for="category in categories"
              :key="category._id"
              class="ma-1"
              color="primary"
              text-color="white"
              small
              :to="`/category/${category.slug}`"
            >
              {{ category.name }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
      <!-- 他のカード -->
    </v-col>
  </v-row>
</template>

<style scoped></style>
