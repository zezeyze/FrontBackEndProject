<template>
  <q-page style="background-color: white">
    <the-top-page></the-top-page>
    <the-option-page></the-option-page>
    <the-sign-in-page></the-sign-in-page>
    <the-bottom-page></the-bottom-page>
  </q-page>
</template>
<script setup>
import TheTopPage from 'src/components/TheTopPage.vue';
import TheOptionPage from 'src/components/TheOptionPage.vue';
import TheSignInPage from 'src/components/TheSignInPage.vue';
import TheBottomPage from 'src/components/TheBottomPage.vue';
</script>
