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

  return { favoriteIDs, addToFavorites, removeFromFavorites };
});
