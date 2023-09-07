<script setup lang="ts">
import { content } from '../content'
import ReadMore from './ReadMore.vue'

const assetURL = (file: string): string => {
  return new URL(`../assets/${file}`, import.meta.url).href  
}
</script>

<template>
  <div class="flex flex-col items-center justify-start gap-4 min-h-screen m-4">

    <!-- Menu -->
    <div class="flex flex-row items-center justify-between w-full py-4">
      <img class="w-12" :src="assetURL('logo.svg')" alt="logo">
      <img :src="assetURL('icon-menu.svg')" alt="menu">
    </div>

    <!-- Headline -->
    <img :src="assetURL('image-web-3-mobile.jpg')" alt="bla">
    <p>{{ content.headline.title }}</p>
    <p>{{ content.headline.description }}</p>
    <ReadMore></ReadMore>

    <!-- News -->
    <div class="flex flex-col">
      <p>New</p>
      <div class="flex flex-col" v-for="article of content.news">
        <p>{{ article.title }}</p>
        <p>{{ article.description }}</p>
      </div>
    </div>

    <!-- Bottom -->
    <div class="flex flex-col">
      <div class="flex flex-row" v-for="(b, index) in content.bottom" :key="index">
        <img :src="assetURL(b.picture)">
        <div class="flex flex-col">
          <p>0{{ index + 1 }}</p>
          <p>{{ b.title }}</p>
          <p>{{ b.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>