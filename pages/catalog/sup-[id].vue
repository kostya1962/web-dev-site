<script setup>
const route = useRoute(); //извлекаю текущий маршрут (путь и параметры)

const id = route.params.id;
</script>

<template>
    <div>
        {{ id }}
    </div>
</template>