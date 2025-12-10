<script setup lang="ts">
import { useFavoriteStore } from '~/state/favorite.state';

    const favoriteSate = useFavoriteStore();

    favoriteSate.addToFavorites(1);
</script>


<template>
    <div>
        {{  favoriteSate.favoriteIDs[0] }}
    </div>
</template>