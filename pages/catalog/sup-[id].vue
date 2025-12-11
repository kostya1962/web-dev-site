<script setup lang="ts">
import type { Product } from '~/interfaces/product.interface';


const route = useRoute(); //извлекаю текущий маршрут (путь и параметры)
const API_URL = useAPI();


const {data} = await useFetch<{product: Product}>(
    API_URL + '/products/' + route.params.id
);
</script>

<template>
    <div>
        <div>
            {{ data?.product.name }}
        </div>
    </div>
</template>