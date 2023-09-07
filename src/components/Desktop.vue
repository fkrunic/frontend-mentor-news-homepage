<script setup lang="ts">
import { content } from '../content';
import ReadMore from './ReadMore.vue';
import { assetURL } from './common';
</script>

<template>
  <div class="flex flex-col items-center justify-start min-h-screen">

    <!-- Banner -->
    <div class="flex flex-row">
      <img :src="assetURL('logo.svg')">
      <div class="flex flex-row">
        <p v-for="page of content.pages">{{ page }}</p>
      </div>
    </div>

    <!-- Center Spread -->
    <div class="flex flex-row">

      <!-- Headline -->
      <div class="flex flex-col">
        <img :src="assetURL('image-web-3-desktop.jpg')">
        <div class="flex flex-row">
          <p>{{ content.headline.title }}</p>
          <div class="flex flex-col">
            <p>{{ content.headline.description }}</p>
            <ReadMore></ReadMore>
          </div>
        </div>
      </div>

      <!-- News -->
      <div class="flex flex-col">
        <p>News</p>
        <div class="flex flex-col" v-for="n of content.news">
          <p>{{ n.title }}</p>
          <p>{{ n.description }}</p>
        </div>
      </div>
    </div>

    <!-- Bottom Articles -->
    <div class="flex flex-row">
      <div class="flex flex-row" v-for="(article, index) in content.bottom" :key="index">
        <img :src="assetURL(article.picture)">
        <div class="flex flex-col">
          <p>0{{ index + 1 }}</p>
          <p>{{ article.title }}</p>
          <p>{{ article.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>