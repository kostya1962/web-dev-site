<script setup lang="ts">
import type { Product } from '~/interfaces/product.interface';

    const config = useRuntimeConfig();
    const product = defineProps<Product>();

</script>

<template>
    <NuxtLink class="card" to="/">
        <div 
            class="card__image" 
            :style="{ backgroundImage: `url(${config.public.imageurl}${product.images[0]})` }">
            <span class="card__discount">
                - {{ product.discount }}%
            </span>
        </div>
        <div class="card__name">
            {{ product.name }}
        </div>
        <div class="card__price">
            {{ product.price * 77 }} ₽
        </div>
    </NuxtLink>
</template>

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        gap: 24px;
        max-width: 320px;
        width: 100%;
        text-decoration: none;
    }

    .card__image{
        aspect-ratio: 1/1;
        border-radius: 8px;
        min-width: 320px;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: lightgray;
        padding: 16px;
    }

    .card__discount{
        background: var(--color-accent);
        border-radius: 4px;
        padding: 2px 8px;
        font-size: 12px;
        color: var(--color-white);
    }

    .card__name{
        font-size: 20px;
        line-height: 26px;
        color: var(--color-black);
    }

    .card__price {
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        text-transform: capitalize;
        color: var(--color-accent);
    }
    

</style>