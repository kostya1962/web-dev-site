<script setup lang="ts">
//import type { GetCategoryResponse } from '~/interfaces/category.interface';

const select = ref<string>("");

// const config = useRuntimeConfig();
// const API_URL = config.public.apiurl;
// console.log("API URL:", API_URL);

// const { data, error } = await useFetch<GetCategoryResponse>(API_URL + "/categories");

// console.log(data);
// console.log(error);


</script>

<template>
    <div>
        КАТАЛОГ ТОВАРОВ
        <SelectFiled 
        v-model="select"
        :options="[
            {
            value: '', 
            label: 'Категории'
            },
            {
            value: '1', 
            label: 'Первый'
            },
            {
            value: '2',
            label: 'Второй'
            },
            {
            value: '3',
            label: 'Третий'
            }
        ]"
        />
    </div>
</template>