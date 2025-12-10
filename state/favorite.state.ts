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

  function toggleFavorite(id: number) {
    if (!favoriteIDs.value.includes(id)) {
      favoriteIDs.value.push(id);
      return;
    }
    favoriteIDs.value = favoriteIDs.value.filter((favID) => favID !== id);
  }

  function isFavorite(id: number) {
    return favoriteIDs.value.find((f) => f == id);
  }

  return {
    favoriteIDs,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
  };
});
