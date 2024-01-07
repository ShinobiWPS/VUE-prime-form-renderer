<script setup lang="ts">
// See vite.config.ts for details about automatic imports
const route = useRoute();

useHead({
  title: () => route.meta.title || "Vue3",
});
</script>

<template>
  <header>
    <h1>Alexandru's app</h1>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>
