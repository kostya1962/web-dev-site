<script setup lang="ts">
import type { Product } from '~/interfaces/product.interface';
import { useFavoriteStore } from '~/state/favorite.state';

const favoriteState = useFavoriteStore();
const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const products = ref<Product[]>([]);


watchEffect(async () => {
    const data = await Promise.all(
        favoriteState.favoriteIDs.map(id => {
            return $fetch<{product: Product}>(API_URL + '/products/' + id);
        })
    );
    products.value = data.map(item => item.product);
});
</script>


<template>
    <div class="catalog__list">
        <CatalogCard 
                    v-for="product in products"
                    :key="product.id"
                    v-bind="product"/>
    </div>
</template>

<style scoped>
    .catalog__list{
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 64px 12px;
    }
</style>