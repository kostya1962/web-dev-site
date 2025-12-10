<script setup lang="ts">
import { useFavoriteStore } from '~/state/favorite.state';

    const favoriteSate = useFavoriteStore();

    await callOnce('loadFavorites', () => favoriteSate.loadFavorites(),{
        mode: 'navigation',
    });
</script>


<template>
    <div>
        {{  favoriteSate.favoriteIDs[0] }}
    </div>
</template>