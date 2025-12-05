<script setup lang="ts">
import LayoutFooter from '~/components/Layout/LayoutFooter.vue';

</script>

<template>
    <div>
        <div>Шапка</div>
        <slot />
        <LayoutFooter />
    </div>
</template>