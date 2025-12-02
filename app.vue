<script setup lang="ts">
import { ref } from 'vue';

const hello = ref('My name is Kostya');
</script>

<template>
  {{ hello }}
  <TestComp />
  <div>
    <SharedSecondComp />

    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
