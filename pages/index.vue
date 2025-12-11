<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
useSeoMeta({
    title: 'Главная страница',
    description: 'Главная страница магазина Shopper с указанием последних поступлений и новостей',
    ogDescription: 'Главная страница магазина Shopper с указанием последних поступлений и новостей',
});

    function openAbout(){
        navigateTo("/about");
    }


</script>
<template>
    <div>
        Content of the index page
        <!-- <NuxtLink to="/about">Перейти в About</NuxtLink> -->
        <button @click="openAbout">Перейти (навигация)</button>
        <InputFiled variant="black" placeholder="Введите ваш email"/>
    </div>
</template>