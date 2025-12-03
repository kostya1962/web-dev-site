<script setup lang="ts">
import { ref } from 'vue';


const config = useRuntimeConfig();
const hello = ref(config.token);
const endAPI = ref(config.public.apiurl);
</script>

<template>
  {{ endAPI }}
  <div>
    {{ hello }} 
    <SecondComp />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
