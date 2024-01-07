<script setup lang="ts">
import Button from "primevue/button";
</script>
<template>
  <div>
    <h2>Index page</h2>
    <Button label="Link" link />
    <router-link to="/form" custom v-slot="{ navigate }">
      <Button label="Go to Form" @click="navigate" />
    </router-link>
  </div>
</template>
