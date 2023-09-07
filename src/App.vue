<script setup lang="ts">
import { onMounted } from 'vue';
import Mobile from './components/Mobile.vue'

const bodyClasses = 'font-inter bg-off-white'

onMounted(() => {
  document.body.className = bodyClasses
})

const watchLock = (lockStatus: boolean) => {
  if (lockStatus) {
    document.body.className = bodyClasses + ' overflow-hidden'
  } else {
    document.body.className = bodyClasses
  }
}

</script>

<template>
  <Mobile class="desktop:hidden" @lock-status="watchLock"></Mobile>
</template>