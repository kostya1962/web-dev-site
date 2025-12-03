<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    function openAbout(){
        navigateTo("/blog");
    }
</script>
<template>
    <div>
        Content of the index page
        <!-- <NuxtLink to="/about">Перейти в About</NuxtLink> -->
        <button @click="openAbout">Перейти (навигация)</button>
    </div>
</template>