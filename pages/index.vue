<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    function openAbout(){
        navigateTo("/about");
    }
</script>
<template>
    <div>
        Content of the index page
        <!-- <NuxtLink to="/about">Перейти в About</NuxtLink> -->
        <button @click="openAbout">Перейти (навигация)</button>
        <IconTelegram />
        <InputFiled variant="black" placeholder="Введите ваш email"/>
    </div>
</template>