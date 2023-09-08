<script setup lang="ts">
import { content } from '../content';
import ReadMore from './ReadMore.vue';
import { assetURL } from './common';
</script>

<template>
  <div class="flex flex-col items-center justify-start gap-14 min-h-screen mx-40 my-20">

    <!-- Banner -->
    <div class="flex flex-row w-full items-center justify-between">
      <img :src="assetURL('logo.svg')">
      <div class="flex flex-row gap-8 text-dark-grayish-blue">
        <p class="hover:text-soft-orange hover:cursor-pointer" v-for="page of content.pages">{{ page }}</p>
      </div>
    </div>

    <!-- Center Spread -->
    <div class="flex flex-row gap-8">

      <!-- Headline -->
      <div class="flex flex-col gap-8">
        <img :src="assetURL('image-web-3-desktop.jpg')">
        <div class="flex flex-row gap-20">
          <p class="text-[54px] leading-[55px] font-bold">{{ content.headline.title }}</p>
          <div class="flex flex-col gap-8">
            <p class="p-2 pl-6 text-sm leading-6 text-dark-grayish-blue">{{ content.headline.description }}</p>
            <!-- Button -->
            <ReadMore class="ml-6 w-[12rem]"></ReadMore>
          </div>
        </div>
      </div>

      <!-- News -->
      <div class="flex flex-col justify-between gap-8 px-6 pt-6 bg-very-dark-blue">
        <p class="pt-2 text-soft-orange text-4xl font-bold">New</p>
        <div 
          class="flex flex-col gap-1 pb-8 w-[19rem] border-solid border-[1px]"
          :class="n.border ? 'border-b-grayish-blue' : ''"
          v-for="n of content.news"                     
          >
          <p class="text-off-white font-bold text-lg hover:text-soft-orange hover:cursor-pointer">{{ n.title }}</p>
          <p class="text-grayish-blue/80 text-sm">{{ n.description }}</p>
        </div>
      </div>
    </div>

    <!-- Bottom Articles -->
    <div class="flex flex-row gap-12 -ml-5">
      <div class="flex flex-row gap-6" v-for="(article, index) in content.bottom" :key="index">
        <img class="h-32" :src="assetURL(article.picture)">
        <div class="flex flex-col w-52 gap-2">
          <p class="text-3xl font-bold text-grayish-blue">0{{ index + 1 }}</p>
          <p class="text-lg font-bold hover:text-soft-red hover:cursor-pointer">{{ article.title }}</p>
          <p class="text-sm text-dark-grayish-blue">{{ article.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>