<script lang="ts" setup>
import type { Article } from "~/types/article";
const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});

const createdAt = computed(() => {
  return `${new Date(
    props.article._sys.createdAt
  ).toLocaleDateString()} ${new Date(
    props.article._sys.createdAt
  ).toLocaleTimeString()}`;
});

const dynamicStyle = computed(() => {
  return `max-width: ${props.article.coverImage?.width}px; max-height: ${props.article.coverImage?.height}px;`;
});
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="wrap-text">
      <v-img
        class="mx-auto"
        :src="props.article.coverImage?.src"
        :style="dynamicStyle"
      />
      <h2 class="text-h6 mt-2 font-weight-bold">
        <NuxtLink :to="`/blog/${props.article.slug}`">
          {{ props.article.title }}
        </NuxtLink>
      </h2>
    </v-card-title>
    <v-divider class="border-opacity-50" />
    <v-card-text class="d-flex flex-column">
      <p class="text-body-1 my-4">{{ props.article.description }}</p>
    </v-card-text>
    <v-spacer />
    <v-card-actions>
      <v-chip-group>
        <v-chip
          v-for="category in props.article.categories"
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
      <v-spacer />
      <span class="text-caption">作成日時：{{ createdAt }}</span>
    </v-card-actions>
  </v-card>
</template>

<style>
.wrap-text {
  word-wrap: break-word !important;
  white-space: normal !important;
  line-height: 0.5 !important;
}
</style>
