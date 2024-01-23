<template>
  <q-page style="background-color: white">
    <the-top-page></the-top-page>
    <the-option-page></the-option-page>
    <the-carousel-page></the-carousel-page>
    <the-photo-page></the-photo-page>
    <the-card-page></the-card-page>
    <the-bottom-page></the-bottom-page>
  </q-page>
</template>
<script setup>
import TheTopPage from 'src/components/TheTopPage.vue';
import TheOptionPage from 'src/components/TheOptionPage.vue';
import TheCarouselPage from 'src/components/TheCarouselPage.vue';
import ThePhotoPage from 'src/components/ThePhotoPage.vue';
import TheCardPage from 'src/components/TheCardPage.vue';
import TheBottomPage from 'src/components/TheBottomPage.vue';
</script>
