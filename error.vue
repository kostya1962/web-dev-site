<script setup lang=ts>
    import type { NuxtError } from '#app';

    const { error } = defineProps<{
        error: NuxtError;
    }>();
</script>

<template>
    <div>
        <h1>{{ error.statusCode }} ОШИБКА</h1>
        <div>{{ error.statusMessage }}</div>
        <ActionButton color="ghost">На главную</ActionButton>
    </div>
</template>