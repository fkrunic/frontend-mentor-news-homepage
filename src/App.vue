<script setup lang="ts">
import { onMounted } from 'vue';
import Mobile from './components/Mobile.vue'

onMounted(() => {
  document.body.className = 'font-inter bg-off-white'
})
</script>

<template>
  <Mobile class="desktop:hidden"></Mobile>
</template>