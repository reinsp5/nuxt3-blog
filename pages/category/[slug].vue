<script lang="ts" setup>
import type { Article } from "~/types/article";
import type { Category } from "~/types/category";

const slug = useRoute().params.slug;

// 記事の取得
const { data: articleData } = await useAsyncData(
  "articles_category",
  async () => {
    const { $newtClient } = useNuxtApp();
    return await $newtClient.getContents<Article>({
      appUid: "blog",
      modelUid: "article",
      query: {
        category: slug,
      },
    });
  }
);
const articles = articleData.value?.items.filter((article) => {
  return article.categories?.some((category) => {
    return category.slug === slug;
  });
})


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
