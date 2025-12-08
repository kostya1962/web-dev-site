<script setup lang="ts">
import type { GetCategoryResponse } from '~/interfaces/category.interface';
import type { GetProductsResponse } from '~/interfaces/product.interface';

const select = ref<string>("");

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;


const {data} = await useFetch<GetCategoryResponse>(API_URL + '/categories'); 

const defaultCategories = {
    value: '',
    label: 'Категории'
};
const categories = computed(() => {
    return data.value ?
            data.value?.categories.map((c) => ({
                value: c.id.toString(),
                label: c.name,
            })).concat([defaultCategories])
        : [defaultCategories];
});

const { data: productsData } = await useFetch<GetProductsResponse>(
    API_URL + '/products', 
    {
        query: {
            linit: 20,
            offset: 0,
        }
    }
); 

</script>

<template>
    <div>
        <h1 class="left">Каталог товаров</h1>
        <div class="catalog">
            <div class="catalog__filter">
                <SelectFiled 
                    v-model="select"
                    :options="categories"
                />
            </div>
            <div class="catalog__list">
                <CatalogCard 
                    v-for="product in productsData?.products" 
                    :key="product.id" 
                    v-bind="product"
                />
            </div>
        </div>

    </div>
</template>

<style scoped>
    .catalog{
        display: flex;
    }

    .catalog__filter{
        width: 260px;
        margin-right: 45px;
    }

    .catalog__list{
        display: grid;
        width: 100%;
        gap: 24px 12px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
</style>

