import type { GetCategoryResponse } from "~/interfaces/category.interface";

export const useFavoriteStore = defineStore("favorites", () => {
  const favoriteIDs = ref<number[]>([]);

  function addToFavorites(id: number) {
    if (!favoriteIDs.value.includes(id)) {
      favoriteIDs.value.push(id);
    }
  }

  function removeFromFavorites(id: number) {
    favoriteIDs.value = favoriteIDs.value.filter((favID) => favID !== id);
  }

  async function loadFavorites() {
    const data = await $fetch<GetCategoryResponse>(
      "http://localhost:3000/api/categories"
    );

    favoriteIDs.value = data.categories.map((c) => c.id);
  }

  return { favoriteIDs, addToFavorites, removeFromFavorites, loadFavorites };
});
