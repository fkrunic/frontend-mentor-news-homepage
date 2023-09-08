<script setup lang="ts">
import { ref } from 'vue';
import { content } from '../content'
import { assetURL } from './common';
import ReadMore from './ReadMore.vue'

const emit = defineEmits<{
  lockStatus: [status:boolean]
}>()

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
  emit('lockStatus', showMenu.value)
}

</script>

<template>
  <div class="relative flex flex-col items-end justify-center mb-10">

    <!-- Backdrop -->
    <div 
      class="absolute w-full h-full bg-very-dark-blue opacity-30"
      :class="showMenu ? '' : 'hidden'"></div>

    <!-- Active Menu -->
    <div 
      class="absolute flex flex-col h-full w-3/4 bg-off-white"
      :class="showMenu ? '' : 'hidden'"
      >
      <div class="flex flex-row justify-end p-7 pr-5">
        <img :src="assetURL('icon-menu-close.svg')" @click="toggleMenu">
      </div>
      <div class="flex flex-col gap-2 mt-12">
        <p class="p-2 pl-6 text-lg" v-for="page of content.pages"> {{ page }}</p>
      </div>
    </div>

    <!-- Default Page -->
    <div class="flex flex-col items-center justify-start gap-4 min-h-screen m-4">

      <!-- Menu -->
      <div class="flex flex-row items-center justify-between w-full py-4">
        <img class="w-12" :src="assetURL('logo.svg')" alt="logo">
        <img :src="assetURL('icon-menu.svg')" alt="menu" @click="toggleMenu">
      </div>

      <!-- Headline -->
      <div class="flex flex-col items-start gap-4">
        <img :src="assetURL('image-web-3-mobile.jpg')" alt="bla">
        <p class="text-4xl pt-2 pr-10 font-extrabold">{{ content.headline.title }}</p>
        <p class="text-dark-grayish-blue/80 text-sm leading-6">{{ content.headline.description }}</p>
        <ReadMore class="mt-2"></ReadMore>
      </div>

      <!-- News -->
      <div class="flex flex-col gap-4 mt-10 px-4 pt-4 bg-very-dark-blue">
        <p class="p-2 text-soft-orange text-3xl font-bold tracking-wide">New</p>
        <div class="
          flex 
          flex-col 
          gap-2 
          
          p-2 
          pb-8 
          
          border-solid
          border-grayish-blue/50
          " v-for="article of content.news" :class="article.border ? 'border-b-[1px]' : ''">
          <p class="text-off-white font-bold text-lg">{{ article.title }}</p>
          <p class="text-grayish-blue text-sm">{{ article.description }}</p>
        </div>
      </div>

      <!-- Bottom -->
      <div class="flex flex-col gap-8 mt-10">
        <div class="flex flex-row gap-6" v-for="(b, index) in content.bottom" :key="index">
          <img class="w-32 h-32" :src="assetURL(b.picture)">
          <div class="flex flex-col gap-2">
            <p class="text-3xl text-grayish-blue font-bold">0{{ index + 1 }}</p>
            <p class="font-bold text-lg">{{ b.title }}</p>
            <p class="text-sm leading-6 text-very-dark-blue/60 pr-4">{{ b.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>