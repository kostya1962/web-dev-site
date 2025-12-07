<script setup lang="ts">
import type { GetCategoryResponse } from '~/interfaces/category.interface';
import type { Product } from '~/interfaces/product.interface';

const select = ref<string>("");

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
console.log("API URL:", API_URL);

const data = ref<GetCategoryResponse | null>(null);
if (API_URL) {
    const { data: fetched, error } = await useFetch<GetCategoryResponse>(API_URL + '/categories');
    if (error && error.value) {
        console.warn('Could not load categories:', error.value);
    } else {
        data.value = fetched.value as GetCategoryResponse | null;
    }
} else {
    console.warn('API_URL is empty — skipping categories fetch');
}

const defaultCategories = {
    value: '',
    label: 'Категории'
};
const categories = computed(() => {
    if (!data.value || !data.value.categories) return [defaultCategories];
    return data.value.categories.map((c) => ({ value: c.id.toString(), label: c.name })).concat(defaultCategories);
});

const product: Product = {
			"id": 1,
			"name": "Lira Earrings",
			"price": 20,
			"short_description": "Элегантные золотистые серьги-кольца",
			"long_description": "Отлично подойдут к любому гардеробу. Чистое золото высокой пробы, которое не оставит вас равнодушными к качеству изделия.",
			"sku": "12",
			"discount": 0,
			"images": [
				"/images/jewelry/lira1.jpg",
				"/images/jewelry/lira2.jpg",
				"/images/jewelry/lira3.jpg",
				"/images/jewelry/lira4.jpg"
			],
			"category_id": 1,
			"category": {
				"id": 1,
				"name": "Серьги",
				"alias": "earrings"
			},
            "created_at": "2025-12-07T01:58:05Z",
			"updated_at": "2025-12-07T01:58:05Z"
		}
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
            <div>
                <CatalogCard v-bind="product"/>
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
</style>

